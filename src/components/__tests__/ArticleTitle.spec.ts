import { describe, expect, it } from "vitest";
import ArticleTitle from "../ArticleTitle.vue";
import { mount } from "@vue/test-utils";

describe("ArticleTitle", () => {
  it("displays title and id", () => {
    const prop_data = { title: "test title", id: "test-id" };
    const wrapper = mount(ArticleTitle, {
      props: prop_data,
    });

    const title = wrapper.get('[data-test="title"]');

    expect(title.text()).toBe(prop_data.title);
    expect(title.element.id).toBe(prop_data.id);
  });
});
