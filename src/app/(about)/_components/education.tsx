import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { cn } from '~/utilities/class-name';

export function EducationCard(p: React.ComponentPropsWithoutRef<typeof Card>) {
  return (
    <Card {...p} className={cn('bg-glow', p.className)}>
      <CardHeader className="gap-2">
        <CardTitle className="text-3xl">Education</CardTitle>
      </CardHeader>

      <CardContent>
        <EducationItem
          title="Diploma in Software Development"
          years="Jan 2022 to Dec 2023"
          description="Study consisted of writing proposals, reports, and recording presentations. Learning consisted of web development, desktop app development using C++ and the Qt framework, and game development using Unity and Unreal Engine. Assessments were done through a combination of practical and theoretical exams, assignments, and projects."
        />
      </CardContent>
    </Card>
  );
}

/*

*/

export function EducationItem(p: {
  title: string;
  years: string;
  description?: string;
}) {
  return (
    <div>
      <h3 className="text-lg inline">{p.title}</h3>
      <span className="text-sm text-gray-400"> ({p.years})</span>
      {p.description && (
        <p className="text-sm text-gray-400">{p.description}</p>
      )}
    </div>
  );
}
