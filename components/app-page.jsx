// 'use client'

// import { useState, useEffect } from 'react'
// import { Github, Linkedin, Mail, Moon, Sun, ExternalLink } from "lucide-react"
// import Image from "next/image"
// import { motion } from "framer-motion"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Switch } from "@/components/ui/switch"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// export function Page() {
//   const [darkMode, setDarkMode] = useState(false)

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//   }, [darkMode])

//   return (
//     (<div
//       className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
//       <header
//         className="sticky top-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md z-10">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-bold">
//             John Doe
//           </motion.h1>
//           <div className="flex items-center space-x-4">
//             <Switch
//               checked={darkMode}
//               onCheckedChange={setDarkMode}
//               className="data-[state=checked]:bg-gray-600" />
//             {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
//           </div>
//         </div>
//       </header>
//       <main className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <section className="mb-16 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}>
//             <Image
//               src="/placeholder.svg?height=200&width=200"
//               alt="Profile Picture"
//               width={200}
//               height={200}
//               className="mx-auto rounded-full border-4 border-gray-300 dark:border-gray-700" />
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mt-4 text-3xl font-bold">
//             John Doe
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="mt-2 text-xl text-gray-600 dark:text-gray-400">
//             Full Stack Developer
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="mt-4 flex justify-center space-x-4">
//             <Button variant="outline" size="icon">
//               <Github className="h-5 w-5" />
//               <span className="sr-only">GitHub</span>
//             </Button>
//             <Button variant="outline" size="icon">
//               <Linkedin className="h-5 w-5" />
//               <span className="sr-only">LinkedIn</span>
//             </Button>
//             <Button variant="outline" size="icon">
//               <Mail className="h-5 w-5" />
//               <span className="sr-only">Email</span>
//             </Button>
//           </motion.div>
//         </section>

//         {/* Main Content Tabs */}
//         <Tabs defaultValue="about" className="mb-16">
//           <TabsList className="grid w-full grid-cols-4 mb-8">
//             <TabsTrigger value="about">About</TabsTrigger>
//             <TabsTrigger value="projects">Projects</TabsTrigger>
//             <TabsTrigger value="skills">Skills</TabsTrigger>
//             <TabsTrigger value="contact">Contact</TabsTrigger>
//           </TabsList>
//           <TabsContent value="about">
//             <Card>
//               <CardHeader>
//                 <CardTitle>About Me</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-700 dark:text-gray-300">
//                   I'm a passionate full stack developer with over 5 years of experience in building web applications.
//                   My expertise spans across front-end technologies like React and Vue.js, as well as back-end technologies
//                   including Node.js and Python. I'm dedicated to creating efficient, scalable, and user-friendly solutions
//                   that solve real-world problems.
//                 </p>
//               </CardContent>
//             </Card>
//           </TabsContent>
//           <TabsContent value="projects">
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {[
//                 { title: "E-commerce Platform", desc: "A full-featured online store with real-time inventory management", tech: "React, Node.js, MongoDB" },
//                 { title: "Task Management App", desc: "A collaborative project management tool with real-time updates", tech: "Vue.js, Express, PostgreSQL" },
//                 { title: "AI-powered Chatbot", desc: "An intelligent customer service bot with natural language processing", tech: "Python, TensorFlow, Flask" }
//               ].map((project, index) => (
//                 <Card key={index} className="overflow-hidden">
//                   <CardHeader>
//                     <CardTitle>{project.title}</CardTitle>
//                     <CardDescription>{project.desc}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//                       Technologies used: {project.tech}
//                     </p>
//                     <Button variant="outline" className="w-full">
//                       View Project <ExternalLink className="ml-2 h-4 w-4" />
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>
//           <TabsContent value="skills">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Skills</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2">
//                   {["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "AWS", "Docker", "GraphQL", "TypeScript"].map((skill) => (
//                     <span
//                       key={skill}
//                       className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//           <TabsContent value="contact">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Contact Me</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-700 dark:text-gray-300 mb-4">
//                   I'm always open to new opportunities and collaborations. Feel free to reach out to me at{" "}
//                   <a
//                     href="mailto:john.doe@example.com"
//                     className="text-blue-600 dark:text-blue-400 hover:underline">
//                     john.doe@example.com
//                   </a>
//                 </p>
//                 <Button className="w-full sm:w-auto">Get In Touch</Button>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </main>
//       <footer className="bg-gray-200 dark:bg-gray-800 py-4 mt-16">
//         <div
//           className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
//           © 2023 John Doe. All rights reserved.
//         </div>
//       </footer>
//     </div>)
//   );
// }
