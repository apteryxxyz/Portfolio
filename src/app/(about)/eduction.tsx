import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

export function EducationCard(props: React.ComponentProps<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader className="gap-2">
        <CardTitle className="text-3xl">Education</CardTitle>
      </CardHeader>

      <CardContent>
        <EducationItem
          title="Diploma in Software Development"
          description="Study explored software development across web, desktop, and game platforms. Assessments included theory and practical exams, assignments, and project reports detailing objectives, methods, results, and conclusions. I also recorded presentations to showcase my work."
        />
      </CardContent>
    </Card>
  );
}

function EducationItem({
  title,
  years,
  description,
}: {
  title: string;
  years?: string;
  description?: string;
}) {
  return (
    <div>
      <h3 className="inline text-lg">{title}</h3>
      {years && <span> ({years})</span>}
      {description && <p>{description}</p>}
    </div>
  );
}
