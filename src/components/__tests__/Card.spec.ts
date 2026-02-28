import { describe, expect, it } from "vitest";
import Card from "../Card.vue";
import { mount } from "@vue/test-utils";

describe("Card", () => {
  it("displays title, thumbnail, and body", () => {
    const expectedTitle = "card title";
    const expectedThumbnailSrc = "image.png";
    const bodyContent = "<p>body renders!</p>";

    const wrapper = mount(Card, {
      slots: {
        default: bodyContent,
      },
      props: {
        title: expectedTitle,
        thumbnailSrc: expectedThumbnailSrc,
      },
    });

    const title = wrapper.get('[data-test="title"');
    const thumbnail = wrapper.get('[data-test="thumbnail"');

    expect(title.text()).toBe(expectedTitle);
    expect(thumbnail.html()).toContain(expectedThumbnailSrc);
    expect(wrapper.html()).toContain(bodyContent);
  });

  it("doesn't display image if thumbnail is missing", () => {
    const wrapper = mount(Card, {
      props: {
        title: "hello",
      },
    });

    const thumbnail = wrapper.findAll('[data-test="thumbnail"]');
    expect(thumbnail).toHaveLength(0);
  });
});
