import { describe, expect, it } from "vitest";
import ExperienceList from "../ExperienceList.vue";
import { mount } from "@vue/test-utils";
import type { ExperienceItem } from "@/models/experience_item";

describe("ExperienceContainer", () => {
  it("renders correct amount of items", () => {
    const experience_items: ExperienceItem[] = [
      {
        title: "test item",
        body: "test body",
        technologies: ["Angular", "React"],
      },
      {
        title: "test item 2",
        body: "test body",
        technologies: ["React"],
      },
    ];

    const wrapper = mount(ExperienceList, {
      props: { experience_items: experience_items },
    });

    const items = wrapper.findAll('[data-test="experience-item"]');

    expect(items.length).toBe(experience_items.length);
  });

  it("renders placeholder if no items supplied", () => {
    const wrapper = mount(ExperienceList, {
      props: {
        experience_items: [],
      },
    });

    const placeholder = wrapper.find('[data-test="placeholder"]');

    expect(placeholder).not.toBeNull();
  });
});
