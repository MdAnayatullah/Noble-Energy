import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase } from "lucide-react";
import Link from "next/link";

const jobOpenings = [
  {
    id: 1,
    title: "Solar Installation Technician",
    department: "Operations",
    location: "New York, NY",
    type: "Full-time",
    experience: "2-5 years",
    description: "We're looking for experienced solar installation technicians to join our growing team."
  },
  {
    id: 2,
    title: "Solar Sales Consultant",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Help homeowners and businesses transition to solar energy through consultative sales."
  },
  {
    id: 3,
    title: "Project Manager",
    department: "Operations",
    location: "Los Angeles, CA",
    type: "Full-time",
    experience: "5+ years",
    description: "Oversee solar installation projects from inception to completion."
  }
];

export default function CareersPage() {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Join Our Team</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Help us build a sustainable future through solar energy
          </p>
        </div>

        <div className="grid gap-6">
          {jobOpenings.map((job) => (
            <Card key={job.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">{job.department}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Briefcase className="mr-1 h-4 w-4" />
                        {job.experience}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Link href={`/careers/${job.id}`}>
                      <Button>Apply Now</Button>
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