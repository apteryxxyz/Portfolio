import Balancer from 'react-wrap-balancer';

export default function Page() {
  return (
    <section className="mx-auto my-44 w-[66%] space-y-4 text-center">
      <h1 className="text-center text-4xl font-bold md:text-6xl">
        {/* <Balancer>Empowering Ideas Through Code.</Balancer> */}

        <Balancer>Empowering Ideas Through Code.</Balancer>
      </h1>

      <p className="text-center font-semibold text-muted-foreground md:text-lg">
        <Balancer>
          Kia ora! I'm Cody, a Kiwi web and mobile software developer from
          Aotearoa New Zealand. I love building things, and I'm always looking
          for new things to learn. I have experience with a wide range of
          technologies, including React and TypeScript.
        </Balancer>
      </p>
    </section>
  );
}
