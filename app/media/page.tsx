import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download } from "lucide-react";
import Link from "next/link";

const mediaItems = [
  {
    id: 1,
    type: "Press Release",
    title: "SolarTech Announces Expansion into New Markets",
    date: "2024-03-15",
    summary: "Leading solar energy provider expands operations to serve more communities.",
    downloadUrl: "#"
  },
  {
    id: 2,
    type: "News Coverage",
    title: "Solar Innovation Award 2024",
    date: "2024-03-10",
    summary: "SolarTech recognized for breakthrough solar panel technology.",
    downloadUrl: "#"
  },
  {
    id: 3,
    type: "Case Study",
    title: "Commercial Solar Success Story",
    date: "2024-03-05",
    summary: "How we helped a major retailer achieve 100% renewable energy.",
    downloadUrl: "#"
  }
];

export default function MediaPage() {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Media Center</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Latest news, press releases, and resources
          </p>
        </div>

        <div className="grid gap-6">
          {mediaItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge>{item.type}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                    <p className="text-muted-foreground">{item.summary}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Link href={item.downloadUrl}>
                      <span className="inline-flex items-center text-primary hover:underline">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </span>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}