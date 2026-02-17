import { describe, expect, it } from "vitest";
import ExperienceContainer from "../ExperienceContainer.vue";
import { mount } from "@vue/test-utils";
import type { ExperienceItem } from "@/models/experience_item";

describe("ExperienceContainer", () => {
  it("renders data in ExperienceItem", () => {
    const experience_item: ExperienceItem = {
      title: "test item",
      body: "test body",
      technologies: ["Angular", "React"],
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
      expect(technologies.text().toLowerCase()).toContain(tech.toLowerCase());
    }
  });

  it("renders image if present in ExperienceItem", () => {
    const experience_item: ExperienceItem = {
      title: "test item",
      body: "test body",
      technologies: ["Angular", "React"],
      thumbnail_image: "thumbnail_img.png",
    };

    const wrapper = mount(ExperienceContainer, {
      props: { experience: experience_item },
    });

    const image = wrapper.get('[data-test="image"]');

    expect(image.html()).toContain(experience_item.thumbnail_image);
  });

  it("renders no image if not present in ExperienceItem", () => {
    const experience_item: ExperienceItem = {
      title: "test item",
      body: "test body",
      technologies: ["Angular", "React"],
    };

    const wrapper = mount(ExperienceContainer, {
      props: { experience: experience_item },
    });

    const image = wrapper.get('[data-test="image"]');

    expect(image.html()).not.toContain(experience_item.thumbnail_image);
  });
});
