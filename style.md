# Blog writing style

Use this guide to turn a rough article into a post that sounds like it belongs on this blog. Preserve the author's actual opinions, experiences, technical claims, image references, links, and sense of humour. Improve clarity and structure without making the writing sound corporate, overly polished, or generic.

## Voice

- Write in first person, conversationally, and with quiet confidence.
- Sound like an engineer learning in public: curious, candid, practical, and occasionally self-deprecating.
- Be honest about uncertainty, mistakes, and being new to a topic. Never pretend to be an expert.
- Keep the energy optimistic and forward-looking, especially when connecting a small lesson to a larger robotics journey.
- Let one or two dry jokes, asides, or emojis appear naturally. Do not force them into every section.
- Use British/Indian English conventions where there is a choice: `learnt`, `realise`, `favourite`.

## Core approach

Start with a concrete reason the topic matters to the author. Then explain what was learned, built, or decided in plain language. Finish by connecting it to the next step of the journey.

The writing should feel like a field note from an ambitious student engineer—not a tutorial written by a company, a formal essay, or a CV entry.

## Structure

Use a clear, descriptive title in sentence case.

Open with a short hook (one to three paragraphs): an observation, a small milestone, a problem, or a personal reason for writing the post.

Use `##` headings for major sections and `###` for a specific concept inside one. Headings should be simple questions or direct labels, such as:

- `## Why C++?`
- `## The quirks of C++`
- `### Namespaces`
- `## What I learnt`

Keep paragraphs short—usually one to four sentences. Break up dense explanations with lists, code, diagrams, screenshots, or a small example.

End with a brief conclusion that says why the topic matters, what comes next, or what changed in the author's understanding. A small final joke is welcome when it earns its place.

## Explaining technical ideas

- Begin with the intuition before terminology.
- Define jargon immediately in ordinary language.
- Prefer a tiny working example over an abstract definition.
- Explain what changes and what stays the same when comparing tools, languages, or approaches.
- Show the author's own mental model: “I think in…”, “What clicked for me was…”, or “The useful part is…”.
- For code posts, move from pseudocode or a simple use case to the real code, then point out the important syntax or behaviour.
- Avoid claiming that a tool is universally best. State why it made sense for this project, budget, or stage of learning.

## Image and link preservation

Image references are part of the source content and must be preserved.

- Never delete an existing Markdown image, HTML image tag, figure, embed, screenshot reference, or image URL.
- Never replace an image reference with prose such as “as shown in the image” unless that prose already existed separately.
- Never remove an image just because its surrounding sentence is rewritten or moved.
- Preserve the original image path or URL exactly unless it is clearly malformed.
- Preserve image ordering relative to the section it belongs to.
- If a paragraph containing an image reference is rewritten, keep the image reference in the same logical location.
- If an image has existing alt text, preserve it unless the alt text is clearly meaningless or malformed.
- If an image has no useful alt text, improve only the alt text while leaving the image path or URL unchanged.
- Preserve ordinary links and their URLs as well. Do not remove, replace, or invent links unless the original is clearly malformed.
- When in doubt, keep the image or link exactly as supplied.

Examples of content that must survive rewriting unchanged in destination:

```markdown
![Warehouse robot FSM](./images/warehouse-fsm.png)

![Robot path planning diagram](/assets/blog/path-planning.webp)

<img src="/images/fsm.svg" alt="Finite state machine diagram">

https://example.com/image.png
```

The wording around these references may be edited, but the references themselves must not disappear.

## Formatting

- Use standard Markdown. Do not escape normal Markdown characters.
- Use `#` only for the article title if the publishing system needs it; otherwise keep the title in front matter and begin the body with the opening paragraph.
- Use `##` for sections and `###` for subsections—not bold text pretending to be a heading.
- Use bold sparingly for the central idea of a paragraph or a key phrase, not for whole sentences.
- Use italics for a brief aside or quoted thought.
- Use fenced code blocks with a language tag, e.g. `cpp`, `python`, `c`, `bash`, or `text`.
- Keep code examples minimal, valid, and formatted normally (four spaces, no excessive blank lines).
- Use blockquotes only when genuinely quoting or translating an idea into plain English.
- Use bulleted lists for multiple examples, options, or expected topics.
- Add image alt text that describes the image rather than writing `alt text`.
- Write links as `[label](https://example.com)`; do not nest or double-wrap Markdown links.

## What to avoid

- Do not over-formalise: avoid phrases like “It is worth noting”, “leverage”, “delve into”, or “in conclusion”.
- Do not use fake inspirational language, exaggerated claims, or generic productivity advice.
- Do not turn every post into a résumé, a tutorial, or a sales pitch.
- Do not pad a post with definitions the reader does not need.
- Do not overuse rhetorical questions, em dashes, exclamation marks, bold text, or emojis.
- Do not erase specificity: retain project constraints, failed attempts, odd decisions, and personal reactions when they explain the result.
- Do not delete images, embeds, image URLs, captions, or links during cleanup.
- Do not infer that an image is unnecessary just because its purpose is not obvious from the surrounding text.

## Editing checklist

Before publishing, check that the post:

- has one clear idea or milestone;
- opens with why the author cared about it;
- explains unfamiliar terms simply;
- uses examples where the explanation would otherwise be abstract;
- keeps the author's uncertainty and personality intact;
- preserves every original image reference, embed, screenshot, and link unless it was clearly malformed;
- contains valid Markdown, code fences, image links, and ordinary links;
- ends by looking forward, however briefly;
- sounds like someone documenting the journey to robotics—not someone claiming to have arrived.
