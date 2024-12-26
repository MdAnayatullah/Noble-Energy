"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const searchResults = [
    {
      category: "Products",
      items: [
        { id: 1, title: "Solar Panel X1", href: "/products/1" },
        { id: 2, title: "Home Battery System", href: "/products/2" },
      ]
    },
    {
      category: "Blog Posts",
      items: [
        { id: 1, title: "Guide to Solar Installation", href: "/blog/1" },
        { id: 2, title: "Solar Energy Benefits", href: "/blog/2" },
      ]
    },
    {
      category: "Projects",
      items: [
        { id: 1, title: "Residential Installation", href: "/projects/1" },
        { id: 2, title: "Commercial Solar Farm", href: "/projects/2" },
      ]
    }
  ];

  return (
    <>
      <Button
        variant="outline"
        className="w-full justify-start text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        Search...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {searchResults.map((group) => (
            <CommandGroup key={group.category} heading={group.category}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => {
                    router.push(item.href);
                    setOpen(false);
                  }}
                >
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}