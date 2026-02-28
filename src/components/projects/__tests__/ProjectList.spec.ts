import { describe, expect, it } from "vitest";
import ProjectList from "../ProjectList.vue";
import { mount } from "@vue/test-utils";
import type { Project } from "@/models/project";

describe("ProjectList", () => {
  it("renders correct amount of items", () => {
    const projects: Project[] = [
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

    const wrapper = mount(ProjectList, {
      props: { projects: projects },
    });

    const items = wrapper.findAll('[data-test="project-item"]');

    expect(items.length).toBe(projects.length);
  });

  it("renders placeholder if no items supplied", () => {
    const wrapper = mount(ProjectList, {
      props: {
        projects: [],
      },
    });

    const placeholder = wrapper.find('[data-test="placeholder"]');

    expect(placeholder).not.toBeNull();
  });
});
