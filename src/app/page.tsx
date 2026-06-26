import { MainLayout } from "../layouts/main/main-layout";
import { SkillCard } from "../components/skill-card/skill-card";

const skills =[
  {
    title: "Next.js",
    description: "ページの作成、ルーティング、コンポーネント分割を練習しています。",
  },
  {
    title: "Tailwind CSS",
    description: "classNameを使って、余白、色、レイアウトを調整できます。",
  },
  {
    title: "GitHub",
    description: "ブランチ、コミット、push、PR作成を練習しています。",
  }
]

export default function Home() {
  return(
    <MainLayout>
      <div className="flex w-full mx-auto max-w-5xl flex-col gap-16 px-6 py-12 ">
        <section className="rounded-2xl bg-neutral-500 text-white px-8 py-16">
          <p className="text-sm font-bold text-sky-300">Portfolio</p>
          <h1 className="mt-4 text-4xl font-bold">Hello,World I am shake</h1>
          <p className="mt-4 max-w-2xl text-neutral-300">Next.jsとTailwind CSSを使って、ポートフォリオを作っています。</p>
        </section>

        <section id='skills'>
          <h2 className="text-2xl font-bold text-neutral-900">Skills</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {skills.map((skill) =>(
              <SkillCard key={skill.title} title={skill.title} description={skill.description} />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};