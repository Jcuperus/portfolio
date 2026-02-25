import { describe, expect, it } from "vitest";
import ExperienceContainer from "../ExperienceContainer.vue";
import { mount } from "@vue/test-utils";
import type { ExperienceItem } from "@/models/experience_item";

describe("ExperienceContainer", () => {
  it("renders data in ExperienceItem", () => {
    const experienceItem: ExperienceItem = {
      title: "test item",
      body: "test body",
      technologies: ["Angular", "React"],
    };

    const wrapper = mount(ExperienceContainer, {
      props: { experience: experienceItem },
    });

    const title = wrapper.get('[data-test="title"]');
    const body = wrapper.get('[data-test="body"]');
    const technologies = wrapper.get('[data-test="technologies"]');

    expect(title.text()).toBe(experienceItem.title);
    expect(body.text()).toBe(experienceItem.body);

    for (const tech of experienceItem.technologies) {
      expect(technologies.text().toLowerCase()).toContain(tech.toLowerCase());
    }
  });

  it("renders image if present in ExperienceItem", () => {
    const experienceItem: ExperienceItem = {
      title: "test item",
      body: "test body",
      technologies: ["Angular", "React"],
      thumbnailImage: "thumbnail_img.png",
    };

    const wrapper = mount(ExperienceContainer, {
      props: { experience: experienceItem },
    });

    const image = wrapper.get('[data-test="image"]');

    expect(image.html()).toContain(experienceItem.thumbnailImage);
  });

  it("renders no image if not present in ExperienceItem", () => {
    const experienceItem: ExperienceItem = {
      title: "test item",
      body: "test body",
      technologies: ["Angular", "React"],
    };

    const wrapper = mount(ExperienceContainer, {
      props: { experience: experienceItem },
    });

    const image = wrapper.get('[data-test="image"]');

    expect(image.html()).not.toContain(experienceItem.thumbnailImage);
  });

  it("renders company if present in ExperienceItem", () => {
    const experienceItem: ExperienceItem = {
      title: "test item",
      body: "test body",
      company: "test company",
      technologies: [],
    };

    const wrapper = mount(ExperienceContainer, {
      props: { experience: experienceItem },
    });

    const company = wrapper.get('[data-test="company"]');

    expect(company.text()).toBe(experienceItem.company);
  });

  it("renders link if present in ExperienceItem", () => {
    const experienceItem: ExperienceItem = {
      title: "test item",
      body: "test body",
      technologies: [],
      link: "test link",
    };

    const wrapper = mount(ExperienceContainer, {
      props: { experience: experienceItem },
    });

    const link = wrapper.get('[data-test="link"]');
    expect(link.element.attributes.getNamedItem("href")).not.toBeNull();
    const href = link.attributes()["href"];
    expect(experienceItem.link).toContain(href);
  });

  it("renders source if present in ExperienceItem", () => {
    const experienceItem: ExperienceItem = {
      title: "test item",
      body: "test body",
      technologies: [],
      source: "test source",
    };

    const wrapper = mount(ExperienceContainer, {
      props: { experience: experienceItem },
    });

    const source = wrapper.get('[data-test="source"]');
    expect(source.element.attributes.getNamedItem("href")).not.toBeNull();
    const href = source.attributes()["href"];
    expect(experienceItem.source).toContain(href);
  });
});
