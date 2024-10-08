"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Moon, Sun, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Marquee from "@/components/ui/marquee"; // Import your marquee component

export default function Component() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const skills = [
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "C#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Flutter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
  ];

  const topRowSkills = skills.slice(0, 8);
  const bottomRowSkills = skills.slice(8);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="sticky top-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            Joemari Obrial
          </motion.h1>
          <div className="flex items-center space-x-4">
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
              className="data-[state=checked]:bg-gray-600"
            />
            {darkMode ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/images/sss.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="mx-auto rounded-full border-4 border-gray-300 dark:border-gray-700"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-3xl font-bold"
          >
            Joemari Obrial
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-2 text-xl text-gray-600 dark:text-gray-400"
          >
            Web Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 flex justify-center space-x-4"
          >
            <a
              href="https://github.com/JoemariObrial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/joemari-obrial-53907b329/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <Button
              variant="outline"
              size="icon"
              title="joemariobrial54@gmail.com"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </motion.div>
        </section>

        <Tabs defaultValue="about" className="mb-16">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  I'm a passionate web development student with experience in
                  building web applications. My programming skills include PHP,
                  JavaScript, Next.js, Flutter, Python, C++, and C#. I'm
                  dedicated to creating efficient, scalable, and user-friendly
                  solutions that solve real-world problems. Currently, I'm also
                  expanding my knowledge and learning new technologies to
                  enhance my web development skills.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="projects">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Barangay Bulua Health Center Patient Record System",
                  desc: "Worked with a team to create a web system that automates consultation records, lab processing, and report generation for Barangay Bulua, Cagayan De Oro City.",
                  tech: "PHP, JavaScript, MySQL, GIT",
                  image: "/assets/images/capstone.png",
                },
                {
                  title: "Equipment Tools Borrowing Web App",
                  desc: "The Equipment Tools Borrowing Web App simplifies the lending and borrowing of tools by connecting users in a local community. With an easy-to-navigate interface, it allows individuals to list, search for, and request equipment, promoting resource sharing and collaboration.",
                  tech: "PHP, JavaScript, MySQL",
                  image: "/assets/images/toolsapp.png",
                },
                {
                  title: "Math For Kids App",
                  desc: "An educational app designed to teach basic arithmetic to children aged 5-8. Features interactive games and quizzes to make learning fun and engaging.",
                  tech: "Flutter, Mysql, PHP",
                  image: "/assets/images/project.jpg",
                },
                {
                  title: "Centrio Ayala POS Web App",
                  desc: "A point of sale system designed for Centrio Ayala. It provides a seamless and efficient way to manage sales.",
                  tech: "PHP, JavaScript, MySQL",
                  image: "/assets/images/ayalapos.png",
                },
                {
                  title: "Spider Supplier Web App",
                  desc: "The Spider Supplier Web App is a point-of-sale system designed to streamline sales management by providing an efficient interface for processing transactions, tracking inventory, and generating real-time reports.",
                  tech: "PHP, JavaScript, MySQL",
                  image: "/assets/images/spidesupply.png",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-transform duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Technologies used: {project.tech}
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                        />
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Marquee duration="20s">
                    {topRowSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 mx-4"
                      >
                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="mb-2"
                        />
                        <span className="text-xs text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </Marquee>
                  <Marquee reverse duration="20s">
                    {bottomRowSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 mx-4"
                      >
                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="mb-2"
                        />
                        <span className="text-xs text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </Marquee>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I'm always open to new opportunities and collaborations. Feel
                  free to reach out to me at{" "}
                  <a
                    href="mailto:joemariobrial@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    joemariobrial54@gmail.com
                  </a>
                </p>
                <Button className="w-full sm:w-auto">Get In Touch</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="bg-gray-200 dark:bg-gray-800 py-4 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          © 2024 Joemari Obrial. All rights reserved.
        </div>
      </footer>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 5s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 5s linear infinite;
        }
      `}</style>
    </div>
  );
}
