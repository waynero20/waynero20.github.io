import localFont from "next/font/local";
import AnimatedDiv from "@/components/common/animated/animated-div";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Markdown from "react-markdown";
import { CommonCard } from "@/components/common/card";
import { DATA } from "@/lib/data";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable}  min-h-screen  font-sans max-w-2xl mx-auto py-12 sm:py-24 px-6`}
    >
      <main className="flex flex-col min-h-[100dvh] space-y-10 text-black">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <AnimatedDiv
                  animationType="SlideInFromLeft"
                  duration={1}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                >
                  {`Hello, I'm ${DATA.name.split(" ")[0]}`}
                </AnimatedDiv>
                <AnimatedDiv
                  duration={1}
                  className="max-w-[600px] md:text-xl"
                  animationType="SlideInFromLeft"
                >
                  {DATA.description}
                </AnimatedDiv>
              </div>
              <AnimatedDiv
                animationType="ZoomIn"
                delay={0.5}
              >
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </AnimatedDiv>
            </div>
          </div>
        </section>

        <section id="about">
          <AnimatedDiv
            delay={0.5}
            animationType="SlideInFromLeft"
          >
            <h2 className="text-xl font-bold">About</h2>
          </AnimatedDiv>
          <AnimatedDiv
            delay={0.5}
            animationType="SlideInFromLeft"
          >
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </AnimatedDiv>
        </section>

        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <AnimatedDiv animationType="SlideInFromLeft" delay={1} slideEntrancePoint={-20}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </AnimatedDiv>
            {DATA.work.map((work, id) => (
              <AnimatedDiv
                key={work.company}
                animationType="SlideInFromLeft"
                slideEntrancePoint={-50}
                delay={1 + 0.2 * id}
              >
                <CommonCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </AnimatedDiv>
            ))}
          </div>
        </section>

        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <AnimatedDiv delay={1.5} animationType="SlideInFromLeft">
              <h2 className="text-xl font-bold">Education</h2>
            </AnimatedDiv>
            {DATA.education.map((education, id) => (
              <AnimatedDiv
                animationType="SlideInFromLeft"
                slideEntrancePoint={-50}
                key={education.school}
                delay={1.5 + id * 0.05}
              >
                <CommonCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </AnimatedDiv>
            ))}
          </div>
        </section>


        <section id="skills">
          <AnimatedDiv className="flex min-h-0 flex-col gap-y-3" delay={2.5} animationType="SlideInFromLeft">
            <h2 className="text-xl font-bold">Skills</h2>
            <div
              className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6 mt-2"
            >
              {DATA.skills.map((skill) => (
                <AnimatedDiv
                  animationType="Bubble"
                  key={skill.name}
                  className="flex flex-col items-center justify-center"
                >
                  <Avatar className="h-16 w-16 mb-2">
                    <AvatarImage src={skill.logoUrl} alt={skill.name} />
                    <AvatarFallback>{skill.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-center">{skill.name}</span>
                </AnimatedDiv>
              ))}
            </div>
          </AnimatedDiv>
        </section>
      </main>
    </div>
  );
}
