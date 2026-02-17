import { describe, expect, it } from "vitest";
import FilterBox from "../FilterBox.vue";
import { mount } from "@vue/test-utils";

describe("FilterBox", () => {
  it("emits changed event with query when button is pressed and when value is changed", async () => {
    const expectedQuery = "expQuery";
    const wrapper = mount(FilterBox);

    const filterBtn = wrapper.get('[data-test="filter-button"]');
    const queryInput = wrapper.get('[data-test="query-input"]');

    queryInput.setValue(expectedQuery);
    filterBtn.trigger("click");

    const changeEvent = wrapper.emitted("change") as string[][];
    expect(changeEvent).toHaveLength(2);
    expect(changeEvent[0]).toEqual([expectedQuery]);
    expect(changeEvent[1]).toEqual([expectedQuery]);
  });

  it("emits undefined value when button is pressed without a value", async () => {
    const wrapper = mount(FilterBox);

    const filterBtn = wrapper.get('[data-test="filter-button"]');

    filterBtn.trigger("click");

    const changeEvent = wrapper.emitted("change") as string[][];
    expect(changeEvent).toHaveLength(1);
    expect(changeEvent[0]).toEqual([undefined]);
  });
});
