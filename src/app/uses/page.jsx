import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
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
  description: 'Software I love.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I love."
      intro="I was originally going to remove this section but on reflection it's quite nice to share the things that help me be me. My favourite software that I would recommend:"
    >
      <div className="space-y-20">
        <ToolsSection title="Development tools">
          <Tool title="VSCode (with Cursor)">
            A PyCharm girl for many years I have recently switched to Cursor. 
            Got to see what all this AI hype is about.
          </Tool>
          <Tool title="iTerm2">
            I've just used it for too long. May try out Ghostty soon.
          </Tool>
          <Tool title="QuPath (special mention)">
            If you are working with histology images (or frankly any pyramidal 
            image type) then QuPath is unmatched, free software for image inspection
            and analysis. 
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Adobe Illustrator">
            I tried free alternatives like Inkscape but nothing beat Illustrator, 
            which is a shame because I don't like recommending Adobe! 
            The freedom and expressivity for scientific figure creation was key
            to explaining biological concepts and the results across them. People 
            are just biased by prettier and more professional looking things.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Raycast">
            Is there anything it can't do? Replaced Alfred (and a bunch of other 
            programs like magnet for me). Strongly recommend. 
          </Tool>
          <Tool title="Things3">
            Things3 changed my life. I'm not exaggerating. It was the digital 
            alternative to a physical bullet journal that I'd been looking for. 
            Low friction enough to keep using, powerful enough to be useful.
            I wrote my thesis in under 2 months thanks to Things3 (post about this 
            coming soon!)
          </Tool>
          <Tool title="Notion">
            Who hasn't used Notion at this point? My PhD project lived in Notion 
            and good recording and writing habits made writing the thesis 
            (and collaborating and passing the torch) a lot easier. I recently discovered 
            that I don't like it for ad hoc note taking. 
          </Tool>
          <Tool title="Obsidian">
            {/* TODO */}
            That's where Obsidian comes in. I have thousands of Apple Notes that I 
            haven't explored to the fullest or that are lost in between shopping lists. 
            Obsidian has been a great way to reflect and combine related thoughts.
            I am new to this but I've been loving it so far. Most of my blog posts
            will start as Obsidian notes it seems! Also, graphs are pretty.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Life">
          <Tool title="Daylio">
            I'd tried a few journalling tools and couldn't get one to stick.
            Turns out I don't need to record everything that happens to still
            get actionable insights I care about. Recording everything is a chore. 
            That's why Daylio is the perfect supplement to Obsidian. Fun and easy way to track the trends
            I care about while Obsidian takes care of interesting reflections.
            Looking forward to getting more data to analyse from this. My favourite 
            trend so far is that soreness correlates with better mood for that day
            and the day after. 💪
          </Tool>
          <Tool title="Headspace">
            It took me far too long to get into meditation. I simply wasn't open
            to it. I loved my chattering inner voice. But that voice isn't always
            helpful and that voice isn't all you are. Once I realised this 
            meditation became a powerful tool for steadying and readying the mind.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
