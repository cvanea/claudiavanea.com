import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Publications',
  description:
    'My research outputs.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="My research outputs."
      intro="First author publications from my PhD. Enjoy!"
    >
      <div className="space-y-20">
      <SpeakingSection title="Journals">
          <Appearance
            href="https://www.nature.com/articles/s41467-024-46986-2"
            title="Mapping cell-to-tissue graphs across human placenta histology whole slide images using deep learning with HAPPY"
            description="Accurate placenta pathology assessment is essential for managing maternal and newborn health, but the placenta’s heterogeneity and temporal variability pose challenges for histology analysis. To address this issue, we developed the ‘Histology Analysis Pipeline.PY’ (HAPPY), a deep learning hierarchical method for quantifying the variability of cells and micro-anatomical tissue structures across placenta histology whole slide images. HAPPY differs from patch-based features or segmentation approaches by following an interpretable biological hierarchy, representing cells and cellular communities within tissues at a single-cell resolution across whole slide images. We present a set of quantitative metrics from healthy term placentas as a baseline for future assessments of placenta health and we show how these metrics deviate in placentas with clinically significant placental infarction. HAPPY’s cell and tissue predictions closely replicate those from independent clinical experts and placental biology literature."
            event="Nature Communications 2024"
            cta="Read paper"
          />
        </SpeakingSection>
        <SpeakingSection title="Conferences">
          <Appearance
            href="https://link.springer.com/chapter/10.1007/978-3-031-66958-3_20"
            title="Enhancing Cross-Institute Generalisation of GNNs in Histopathology Through Multiple Embedding Graph Augmentation (MEGA)"
            description="Many recent methods for the analysis of histology whole slide images (WSIs) have used graph neural networks (GNNs) to aggregate visual information over a large image resolution. However, domain shift is a significant challenge in computational histopathology, due to differences in WSI appearance between institutes, and the effect of these differences on training GNNs has not been explored. In this work, we present the Multiple Embedding Graph Augmentation (MEGA) strategy to improve the cross-institute generalisation of GNNs in histology. We show that by introducing image augmentation and normalisation to the node features used to train a GNN, we can train a model that is robust to domain shift without additional labels or further training of the feature extractor. We compare MEGA to noise-based regularisation and demonstrate its effectiveness in a node classification tissue prediction task in placenta histology."
            event="MIUA 2024"
            cta="Read paper"
          />
          <Appearance
            href="https://arxiv.org/abs/2211.06292"
            title="A new graph node classification benchmark: learning structure from histology cell graphs"
            description="We introduce a new benchmark dataset, Placenta, for node classification in an underexplored domain: predicting microanatomical tissue structures from cell graphs in placenta histology whole slide images. This problem is uniquely challenging for graph learning for a few reasons. Cell graphs are large (>1 million nodes per image), node features are varied (64-dimensions of 11 types of cells), class labels are imbalanced (9 classes ranging from 0.21% of the data to 40.0%), and cellular communities cluster into heterogeneously distributed tissues of widely varying sizes (from 11 nodes to 44,671 nodes for a single structure). Here, we release a dataset consisting of two cell graphs from two placenta histology images totalling 2,395,747 nodes, 799,745 of which have ground truth labels. We present inductive benchmark results for 7 scalable models and show how the unique qualities of cell graphs can help drive the development of novel graph neural network architectures."
            event="NeurIPS 2022"
            cta="Read paper"
          />
          <Appearance
            href="https://arxiv.org/abs/2011.11393"
            title="Training Ethically Responsible AI Researchers: a Case Study"
            description="Ethical oversight of AI research is beset by a number of problems. There are numerous ways to tackle these problems, however, they leave full responsibility for ethical reflection in the hands of review boards and committees. In this paper, we propose an alternative solution: the training of ethically responsible AI researchers. We showcase this solution through a case study of a centre for doctoral training and outline how ethics training is structured in the program. We go on to present two second-year students' reflections on their training which demonstrates some of their newly found capabilities as ethically responsible researchers."
            event="NeurIPS 2020"
            cta="Read paper"
          />
        </SpeakingSection>
        <SpeakingSection title="Thesis">
          <Appearance
            href="https://ora.ox.ac.uk/objects/uuid:2c826886-1e64-4727-884f-5ff41a49b71d"
            title="Modelling the placenta from the bottom up: digital phenotyping of human placenta histology"
            description="Join a select group of experts worldwide to read my thesis."
            event="University of Oxford 2024"
            cta="Read thesis (if you dare)"
          />
        </SpeakingSection>

      </div>
    </SimpleLayout>
  )
}
