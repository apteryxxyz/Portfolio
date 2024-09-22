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
          description="Study covered various aspects of creating software applications for different platforms and purposes. Topics included web development, desktop app development, and game development. Assessments consisted of practical and theoretical exams, and assignments. I wrote proposals and reports for each project, explaining the objectives, methods, results, and conclusions. I also recorded presentations to demonstrate and showcase my work to the instructors and peers."
        />
      </CardContent>
    </Card>
  );
}

export function EducationItem(p: {
  title: string;
  years?: string;
  description?: string;
}) {
  return (
    <div>
      <h3 className="text-lg inline">{p.title}</h3>
      {p.years && <span className="text-sm text-gray-400"> ({p.years})</span>}
      {p.description && (
        <p className="text-sm text-gray-400">{p.description}</p>
      )}
    </div>
  );
}
