import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, Globe } from "lucide-react";
import type React from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  githubLink: string;
  deployLink: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  githubLink,
  deployLink,
  technologies,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
        <CardHeader className="p-0">
          <div className="overflow-hidden h-44">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-1 flex flex-col gap-3">
          <h3 className="font-semibold text-base">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed flex-1">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-2 p-4 pt-0">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            disabled={githubLink === "disabled"}
            onClick={() => window.open(githubLink, "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            disabled={deployLink === "disabled"}
            onClick={() => window.open(deployLink, "_blank")}
          >
            <Globe className="mr-2 h-4 w-4" />
            Deploy
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
