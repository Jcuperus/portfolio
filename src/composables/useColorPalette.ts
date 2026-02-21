import { onMounted, ref } from "vue";

export function useColorPalette() {
  const primaryCol = ref("#FFFFFF");
  const primaryBg = ref("#000000");

  onMounted(() => {
    const bodyElement = document.querySelector("body");

    if (!bodyElement) return;

    primaryCol.value =
      getComputedStyle(bodyElement).getPropertyValue("--primary-color");

    primaryBg.value =
      getComputedStyle(bodyElement).getPropertyValue("--primary-bg");
  });

  return { primaryCol, primaryBg };
}
