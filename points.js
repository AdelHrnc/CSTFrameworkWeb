// points.js
export const frameworkPoints = {
  cognitive: {
    enablingIdeaGeneration: {
      ideationScaffolding: {
        title: "Features for Ideation Scaffolding",
        points: [
          {
            text: "S1. Provide a feature that generates abstract sketches semantically similar to existing story content and sketches upon request by children.",
            age: "9-13",
            ai: true
          },
          {
            text: "S2. Provide examples or alternative ideas during the ideation process when using a prototyping tool.",
            age: "8-12",
            ai: false
          },
          {
            text: "S3. Provide a feature that enables children to illustrate the structure of their ideas during the idea development stage.",
            age: "7-13",
            ai: false
          },
          {
            text: "S4. Incorporate distinct robot movements at various speeds and colored lights to stimulate creativity.",
            age: "6-11",
            ai: false
          },
          {
            text: "Avoid failure conditions and enable exploration and multiple correct outcomes to support long-term creativity gains.",
            age: "n/a",
            ai: false
          }
        ]
      },
      questionScaffolding: {
        title: "Features for Question Scaffolding",
        points: [
          {
            text: "S1. Integrate an adaptive algorithm to adjust the complexity of the AI agent's questions by assessing children's cognitive level based on their responses.",
            age: "7-13",
            ai: true
          },
          {
            text: "S2. Use a question-feedback-scaffolding framework in collaborative storytelling to guide engagement and elaboration.",
            age: "2-11",
            ai: false
          },
          {
            text: "S3. Encourage originality by rewarding unique or unusual contributions.",
            age: "6-13",
            ai: false
          }
        ]
      }
    },

    structuringAndExecutingIdeas: {
      structureScaffolding: {
        title: "Features for Structure Scaffolding",
        points: [
          {
            text: "S1. Provide a module that offers children the required structure (e.g., 'the beginning and the end' or 'the conflict in the middle') and elements (e.g., characters like antagonists and protagonists) of the story based on different genres.",
            age: "7-13",
            ai: false
          },
          {
            text: "Provide prompts to help children recall details from their body enactment when writing their stories.",
            age: "n/a",
            ai: true
          },
          {
            text: "Adjust the level of writing support based on children's age and writing proficiency.",
            age: "n/a",
            ai: true
          },
          {
            text: "Provide a pre-defined structure to help children construct story components while allowing flexibility for emergent storytelling.",
            age: "n/a",
            ai: false
          }
        ]
      },
      workflowScaffolding: {
        title: "Features for Workflow Scaffolding",
        points: [
          {
            text: "S1. Provide an integrated interface that connects physical components (e.g., sensors, motors, circuits) with digital tools (e.g., panels, state transition diagrams) in block-based programming environments, enabling children to explore, debug, and manage complex workflows.",
            age: "9-13",
            ai: true
          },
          {
            text: "Incorporate reflection prompts or visual tools to help children pause and consider their creative process.",
            age: "n/a",
            ai: true
          },
          {
            text: "Use subtle visual cues or playful feedback to gently encourage engagement and self-reflection.",
            age: "n/a",
            ai: true
          }
        ]
      },
      tutorial: {
        title: "Features for Tutorial",
        points: [
          {
            text: "S1. Mitigate cognitive load by designing robot interactions to set common ground before the game begins.",
            age: "5-10",
            ai: false
          },
          {
            text: "Match app difficulty and design complexity to children’s cognitive development to facilitate flow.",
            age: "n/a",
            ai: true
          }
        ]
      }
    }
  },

  socioEmotional: {
    modelingCollaboration: {
      modelingTurnTaking: {
        title: "Features for Modeling Turn-Taking",
        points: [
          {
            text: "S1. Adapt the robot peer’s behavior to detect children's frustration and suggest ideas only when they appear lost or silent.",
            age: "5-11",
            ai: true
          },
          {
            text: "S2. Use co-dependent success metrics in collaborative games to promote teamwork rather than competition.",
            age: "5-11",
            ai: false
          },
          {
            text: "S3. Direct the robot to use verbal cues (e.g., 'I have an idea') to indicate it wants to contribute without interrupting the user.",
            age: "7-11",
            ai: true
          },
          {
            text: "S4. Voice the robot’s intent (e.g., 'Look at me go!') to connect its actions with the artifact it creates.",
            age: "5-11",
            ai: true
          },
          {
            text: "S5. Classify situations where a child is uncertain and scaffold with follow-up hints or encouragement.",
            age: "5-11",
            ai: true
          },
          {
            text: "S6. Enhance speech recognition and contextual understanding to ensure natural, age-appropriate dialogue.",
            age: "7-11",
            ai: true
          },
          {
            text: "S7. Gradually reduce scaffolding as children gain expertise to foster independence.",
            age: "5-11",
            ai: true
          },
          {
            text: "S8. Implement balanced turn-taking collaboration where children and robots listen and build on each other’s ideas.",
            age: "7-11",
            ai: true
          },
          {
            text: "S9. Provide convergent thinking scaffolds (e.g., problem-solving prompts) during mid-story phases to enhance coherence.",
            age: "7-11",
            ai: true
          },
          {
            text: "S10. Provide divergent thinking scaffolds (e.g., playful mirroring) during brainstorming or concluding phases.",
            age: "7-11",
            ai: true
          }
        ]
      },
      verbalAndNonverbalBehavior: {
        title: "Features for Verbal & Non-Verbal Behavior",
        points: [
          {
            text: "S1. Align the robot’s verbal and non-verbal behaviors (e.g., facial expressions matching tone) to enhance engagement.",
            age: "5-11",
            ai: true
          },
          {
            text: "S2. Incorporate verbal encouragement and non-verbal cues such as nodding or smiling to foster positive emotions.",
            age: "7-11",
            ai: false
          },
          {
            text: "S3. Use clear, simple, age-appropriate language and adapt tone to children’s communication preferences.",
            age: "5-11",
            ai: true
          },
          {
            text: "S4. Make the robot verbalize its creative process (e.g., 'Here I go!') and match it with expressive animations.",
            age: "5-11",
            ai: true
          },
          {
            text: "S5. Use positive reinforcement (e.g., joyful expressions, celebratory feedback) to evoke curiosity and happiness.",
            age: "5-11",
            ai: true
          },
          {
            text: "Personalize robot dialogue to contribute to the story content and avoid interrupting children's train of thought.",
            age: "n/a",
            ai: true
          },
          {
            text: "Provide immediate auditory or visual feedback to help children evaluate and refine their ideas in real time.",
            age: "n/a",
            ai: true
          }
        ]
      }
    },

    supportingExperimentation: {
      customization: {
        title: "Features for Customization",
        points: [
          {
            text: "S1. Provide children with options of familiar storytelling archetypes.",
            age: "n/a",
            ai: true
          },
          {
            text: "S2. Provide more themes and various doodles for storytelling activities.",
            age: "n/a",
            ai: false
          },
          {
            text: "S3. Customize storytelling structure with a wide variety of novel characters and objects.",
            age: "n/a",
            ai: true
          },
          {
            text: "S4. Make the robot respond to children's actions with context-relevant communication and encouraging dialogue.",
            age: "n/a",
            ai: true
          },
          {
            text: "S5. Make the robot’s scaffolded prompts adaptive across various creative activities.",
            age: "n/a",
            ai: true
          },
          {
            text: "S6. Allow children to customize their robot’s embodiment by choosing between different characters.",
            age: "n/a",
            ai: false
          },
          {
            text: "S7. Make the robot portable and lightweight to support flexible, integrated storytelling.",
            age: "n/a",
            ai: false
          },
          {
            text: "Accommodate children's literacy levels by adjusting story structure and AI prompt complexity.",
            age: "n/a",
            ai: true
          },
          {
            text: "Provide customizable story characters and settings aligned with children’s preferences.",
            age: "n/a",
            ai: false
          }
        ]
      },
      graphics: {
        title: "Features for Graphics",
        points: [
          {
            text: "S1. Offer a variety of images that are not closely tied to well-known stories or cartoons.",
            age: "n/a",
            ai: false
          },
          {
            text: "Design media without targeting specific genders to support broader engagement.",
            age: "n/a",
            ai: false
          }
        ]
      }
    },

    prioritizingAutonomyAndSelfExploration: {
      natureOfTask: {
        title: "Features for the Nature of the Task",
        points: [
          {
            text: "S1. Develop game tasks with moderate difficulty and integrate the robot as part of gameplay.",
            age: "n/a",
            ai: true
          },
          {
            text: "S2. Ensure game-based interactions are open-ended and playful, allowing multiple creative paths.",
            age: "n/a",
            ai: true
          },
          {
            text: "Encourage live acting where children physically perform and synchronize movements with digital elements.",
            age: "n/a",
            ai: false
          }
        ]
      },
      autonomy: {
        title: "Features for Autonomy",
        points: [
          {
            text: "S1. Use reactive scaffolding where help is offered when the player asks for it.",
            age: "n/a",
            ai: true
          },
          {
            text: "S2. Give children control over when and how they engage with creative scaffolds.",
            age: "n/a",
            ai: true
          },
          {
            text: "S3. Create open-ended interfaces that allow free creative expression without evaluative behavior.",
            age: "n/a",
            ai: false
          },
          {
            text: "S4. Replace strict turn-taking with play dynamics that mirror children’s natural play.",
            age: "n/a",
            ai: false
          }
        ]
      }
    }
  },

  physical: {
    enablingVariedInputOutputMethods: {
      multimodalInput: {
        title: "Features for Multimodal Input",
        points: [
          {
            text: "S1. Incorporate tangible blocks with sensors or motors into storytelling for interactive, responsive narratives.",
            age: "7-13",
            ai: true
          },
          {
            text: "S2. Provide versatile interaction options (e.g., rotating movements, manual pushing, color-lights).",
            age: "7-11",
            ai: false
          },
          {
            text: "S3. Develop games that allow children to engage using body gestures and movements.",
            age: "6-13",
            ai: false
          },
          {
            text: "S4. Provide tangible materials (paper, crayons, stickers) to support physical creation alongside storytelling.",
            age: "5-10",
            ai: false
          },
          {
            text: "S5. Apply voice-driven sketching algorithms to transform verbal storytelling into visual sketches in real time.",
            age: "5-11",
            ai: true
          },
          {
            text: "S6. Include multimodal creative options—drawing, animation, sound effects, and narratives—to broaden expression.",
            age: "5-11",
            ai: false
          },
          {
            text: "S7. Enable multiple players to co-create stories and engage collaboratively in physical play.",
            age: "6-12",
            ai: false
          },
          {
            text: "Ensure digital representations match children’s physical movements to support immersion and engagement.",
            age: "n/a",
            ai: false
          },
          {
            text: "Use multisensory feedback (visual, audio, haptic) to help children align movements with rhythm and position.",
            age: "n/a",
            ai: true
          },
          {
            text: "Include features that help children express their ideas more vividly during embodied enactment of a story.",
            age: "n/a",
            ai: true
          },
          {
            text: "Provide features that support body enactment, enabling children to plan and physically act out coherent versions of their story ideas.",
            age: "n/a",
            ai: true
          }
        ]
      },
      multimediaInput: {
        title: "Features for Multimedia Input",
        points: [
          {
            text: "S1. Provide a module to import and edit multimedia (images, photos, videos, audio) for story creation.",
            age: "7-13",
            ai: true
          },
          {
            text: "S2. Allow children to convert real-world images into digital assets to boost motivation and engagement.",
            age: "6-13",
            ai: true
          },
          {
            text: "Avoid relying solely on AI-generated images to inspire children’s storytelling ideas.",
            age: "n/a",
            ai: true
          }
        ]
      },
      outputMethod: {
        title: "Features for Output Methods",
        points: [
          {
            text: "S1. Add options for exporting, saving, or displaying creative projects so children can share their stories.",
            age: "7-13",
            ai: false
          }
        ]
      }
    }
  }
}
