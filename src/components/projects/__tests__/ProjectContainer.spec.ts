import { describe, expect, it } from "vitest";
import ProjectContainer from "../ProjectContainer.vue";
import { mount } from "@vue/test-utils";
import type { Project } from "@/models/project";

describe("ProjectContainer", () => {
  it("renders data in Project", () => {
    const project: Project = {
      title: "test item",
      body: "test body",
      technologies: ["Angular", "React"],
    };

    const wrapper = mount(ProjectContainer, {
      props: { project: project },
    });

    const title = wrapper.get('[data-test="title"]');
    const body = wrapper.get('[data-test="body"]');
    const technologies = wrapper.get('[data-test="technologies"]');

    expect(title.text()).toBe(project.title);
    expect(body.text()).toBe(project.body);

    for (const tech of project.technologies) {
      expect(technologies.text().toLowerCase()).toContain(tech.toLowerCase());
    }
  });

  it("renders image if present in Project", () => {
    const project: Project = {
      title: "test item",
      body: "test body",
      technologies: ["Angular", "React"],
      thumbnailImage: "thumbnail_img.png",
    };

    const wrapper = mount(ProjectContainer, {
      props: { project: project },
    });

    const image = wrapper.get('[data-test="image"]');

    expect(image.html()).toContain(project.thumbnailImage);
  });

  it("renders no image if not present in Project", () => {
    const project: Project = {
      title: "test item",
      body: "test body",
      technologies: ["Angular", "React"],
    };

    const wrapper = mount(ProjectContainer, {
      props: { project: project },
    });

    const image = wrapper.get('[data-test="image"]');

    expect(image.html()).not.toContain(project.thumbnailImage);
  });

  it("renders company if present in Project", () => {
    const project: Project = {
      title: "test item",
      body: "test body",
      company: "test company",
      technologies: [],
    };

    const wrapper = mount(ProjectContainer, {
      props: { project: project },
    });

    const company = wrapper.get('[data-test="company"]');

    expect(company.text()).toBe(project.company);
  });

  it("renders link if present in Project", () => {
    const project: Project = {
      title: "test item",
      body: "test body",
      technologies: [],
      link: "test link",
    };

    const wrapper = mount(ProjectContainer, {
      props: { project: project },
    });

    const link = wrapper.get('[data-test="link"]');
    expect(link.element.attributes.getNamedItem("href")).not.toBeNull();
    const href = link.attributes()["href"];
    expect(project.link).toContain(href);
  });

  it("renders source if present in Project", () => {
    const project: Project = {
      title: "test item",
      body: "test body",
      technologies: [],
      source: "test source",
    };

    const wrapper = mount(ProjectContainer, {
      props: { project: project },
    });

    const source = wrapper.get('[data-test="source"]');
    expect(source.element.attributes.getNamedItem("href")).not.toBeNull();
    const href = source.attributes()["href"];
    expect(project.source).toContain(href);
  });
});
