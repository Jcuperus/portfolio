import { describe, expect, it } from "vitest";
import ExperienceContainer from "../ExperienceContainer.vue";
import { mount } from "@vue/test-utils";
import type { ExperienceItem } from "@/models/experience_item";

describe("ExperienceContainer", () => {
  it("renders data in ExperienceItem", () => {
    const experience_item: ExperienceItem = {
      title: "test item",
      body: "test body",
      technologies: ["angular", "react"],
    };

    const wrapper = mount(ExperienceContainer, {
      props: { experience: experience_item },
    });

    const title = wrapper.get('[data-test="title"]');
    const body = wrapper.get('[data-test="body"]');
    const technologies = wrapper.get('[data-test="technologies"]');

    expect(title.text()).toBe(experience_item.title);
    expect(body.text()).toBe(experience_item.body);

    for (const tech of experience_item.technologies) {
      expect(technologies.text().toLowerCase()).toContain(tech);
    }
  });
});
