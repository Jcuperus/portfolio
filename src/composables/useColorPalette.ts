import { onMounted, ref } from "vue";

type Theme = {
  [key: string]: string;
};

const themes: Theme = {
  pine: "pine",
  red: "red",
  light: "light",
  papyrus: "papyrus",
};

let currentTheme = "";
const primaryCol = ref("#FFFFFF");
const primaryBg = ref("#000000");

export function useColorPalette() {
  function changeTheme(theme: string) {
    if (!(theme in themes) || !themes[theme]) return;

    const className = themes[theme];
    const rootElement = document.documentElement;

    if (rootElement.classList.contains(currentTheme)) {
      rootElement.classList.remove(currentTheme);
    }

    rootElement.classList.add(className);
    currentTheme = className;

    primaryCol.value =
      getComputedStyle(rootElement).getPropertyValue("--primary-color");

    primaryBg.value =
      getComputedStyle(rootElement).getPropertyValue("--primary-bg");
  }

  onMounted(() => {
    changeTheme("pine");
  });

  return { primaryCol, primaryBg, themes, changeTheme };
}
