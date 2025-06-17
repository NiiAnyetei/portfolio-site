import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        {/* <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
            I was using an Intel-based 16” MacBook Pro prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
          <Tool title="Apple Pro Display XDR (Standard Glass)">
            The only display on the market if you want something HiDPI and
            bigger than 27”. When you’re working at planetary scale, every pixel
            you can get counts.
          </Tool>
          <Tool title="IBM Model M SSK Industrial Keyboard">
            They don’t make keyboards the way they used to. I buy these any time
            I see them go up for sale and keep them in storage in case I need
            parts or need to retire my main.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
          <Tool title="Herman Miller Aeron Chair">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection> */}
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio">
            When I need full-scale enterprise tools, Visual Studio delivers
            everything from powerful debugging to seamless Azure integration.
          </Tool>
          <Tool title="Visual Studio Code">
            I don’t care if it’s missing all the bells and whistles of
            heavyweight IDEs—Visual Studio Code remains my go-to editor for
            speed, flexibility, and extensibility.
          </Tool>
          <Tool title="SQL Server Management Studio">
            For database work, I switch to SQL Server Management Studio for its
            comprehensive control.
          </Tool>
          <Tool title="Azure Data Studio">
            I switch to Azure Data Studio for a more modern, developer-friendly
            experience.
          </Tool>
          <Tool title="NGROK">
            When it’s time to demo or test webhooks, NGROK makes exposing local
            servers to the internet seemless.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Figma is hands-down the best tool for modern interface design and
            collaboration. Figma helps bring ideas to life faster, without ever
            needing to leave the browser.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Microsoft To Do">
            Microsoft To Do keeps me focused better than any complex
            productivity suite ever could. With its clean interface, smart daily
            planning (“My Day”), and deep integration with Outlook and Microsoft
            365, it helps me stay on top of personal and project tasks without
            the clutter. Sometimes, less really is more.
          </Tool>
          <Tool title="Azure DevOps">
            Azure DevOps delivers the end-to-end workflow that actually gets
            things shipped. From code repos and CI/CD pipelines to project
            boards and test plans, it brings everything together in one tightly
            integrated platform. Whether I’m tracking user stories or automating
            deployments, Azure DevOps keeps the entire software lifecycle moving
            with precision.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
