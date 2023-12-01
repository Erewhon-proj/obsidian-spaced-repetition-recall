import {
    updateNoteSchedFrontHeader,
    updateCardSchedXml,
    delDefaultTag,
} from "src/dataStore/location_switch";

describe("updateNoteSchedFrontHeader", () => {
    test("update without scheduling", async () => {
        const text: string = `---
sr-due: 2023-11-25
sr-interval: 1
sr-ease: 231
---

    First of all, tell **me** a little bit about what's 
    your experience with note-taking **apps** like? <!--SR:!2023-11-20,3,250!2023-11-18,1,210-->
    `;
        const result = updateNoteSchedFrontHeader(text);
        const expected = `
    First of all, tell **me** a little bit about what's 
    your experience with note-taking **apps** like? <!--SR:!2023-11-20,3,250!2023-11-18,1,210-->
    `;
        expect(result).toEqual(expected);
    });

    test("update with scheduling", async () => {
        const text: string = `
    First of all, tell **me** a little bit about what's 
    your experience with note-taking **apps** like? <!--SR:!2023-11-20,3,250!2023-11-18,1,210-->
    `;
        const sched = [0, "2023-11-25", 1, 231];
        const result = updateNoteSchedFrontHeader(text, sched as RegExpMatchArray);
        const expected = `---
sr-due: 2023-11-25
sr-interval: 1
sr-ease: 231
---

    First of all, tell **me** a little bit about what's 
    your experience with note-taking **apps** like? <!--SR:!2023-11-20,3,250!2023-11-18,1,210-->
    `;
        expect(result).toEqual(expected);
    });
});

describe("updateCardSchedXml", () => {
    test("update without scheduling", async () => {
        const text: string = `
First of all, tell **me** a little bit about what's 
your experience with note-taking **apps** like? <!--SR:!2023-11-20,3,250!2023-11-18,1,210-->
`;
        const result = updateCardSchedXml(text, true);
        const expected = `
First of all, tell **me** a little bit about what's 
your experience with note-taking **apps** like?`;
        expect(result).toEqual(expected);
    });

    test("update cardtext with ``` ", async () => {
        const text: string = `
\`\`\`
First of all, tell **me** a little bit about what's 
your experience with note-taking **apps** like?
\`\`\`
<!--SR:!2023-11-20,3,250!2023-11-18,1,210-->
`;
        const result = updateCardSchedXml(text, true);
        const expected = `
\`\`\`
First of all, tell **me** a little bit about what's 
your experience with note-taking **apps** like?
\`\`\``;
        expect(result).toEqual(expected);
    });
});
describe("delDefaultTag", () => {
    test("delDefaultTag : otherTag, review/default", () => {
        const fileText = `---
tags:     kkk, review/default
---
Notes`;
        const expectedText = `---
tags:     kkk
---
Notes`;
        const result = delDefaultTag(fileText, "review/default");
        expect(result).toEqual(expectedText);
    });

    test("delDefaultTag : review/default, otherTag, ", () => {
        const fileText = `---
tags:     kkk, review/default
---
Notes`;
        const expectedText = `---
tags:     kkk
---
Notes`;
        const result = delDefaultTag(fileText, "review/default");
        expect(result).toEqual(expectedText);
    });

    test("delDefaultTag : \n review/default", () => {
        const fileText = `---
tags:
    - review/default
    - ekadk
    - kfewq
---
Obsidian`;
        const expectedText = `---
tags:
    - ekadk
    - kfewq
---
Obsidian`;
        const result = delDefaultTag(fileText, "review/default");
        expect(result).toEqual(expectedText);
    });
    test("delDefaultTag : \n review/default", () => {
        const fileText = `---
tags:
    - ekadk
    - review/default
    - kfewq
sr-due: 2023-11-25
sr-interval: 1
sr-ease: 231
---
Obsidian`;
        const expectedText = `---
tags:
    - ekadk
    - kfewq
sr-due: 2023-11-25
sr-interval: 1
sr-ease: 231
---
Obsidian`;
        const result = delDefaultTag(fileText, "review/default");
        expect(result).toEqual(expectedText);
    });
    test("delDefaultTag : , other2 \n review/default", () => {
        const fileText = `---
tags: other, other2
    - ekadk
    - kfewq, review/default
sr-due: 2023-11-25
sr-interval: 1
sr-ease: 231
---
Obsidian`;
        const expectedText = `---
tags: other, other2
    - ekadk
    - kfewq
sr-due: 2023-11-25
sr-interval: 1
sr-ease: 231
---
Obsidian`;
        const result = delDefaultTag(fileText, "review/default");
        expect(result).toEqual(expectedText);
    });
});
