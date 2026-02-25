import { describe, expect, it } from "vitest";
import ArticleTitle from "../ArticleTitle.vue";
import { mount } from "@vue/test-utils";

describe("ArticleTitle", () => {
  it("displays title and id", () => {
    const propData = { title: "test title", id: "test-id" };
    const wrapper = mount(ArticleTitle, {
      props: propData,
    });

    const title = wrapper.get('[data-test="title"]');

    expect(title.text()).toBe(propData.title);
    expect(title.element.id).toBe(propData.id);
  });
});
