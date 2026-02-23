import { onMounted, ref } from "vue";

type Theme = {
  [key: string]: string;
};

const themes: Theme = {
  pine: "pine",
  red: "red",
  light: "light",
  papyrus: "papyrus",
  belasting: "belasting",
  vintage: "vintage",
  brat: "brat",
};

const defaultTheme = "pine";
const storageKey = "theme";
const primaryCol = ref("#FFFFFF");
const primaryBg = ref("#000000");
const currentTheme = ref(defaultTheme);

export function useColorPalette() {
  function changeTheme(theme: string) {
    if (!(theme in themes) || !themes[theme]) return;

    const className = themes[theme];
    const rootElement = document.documentElement;

    if (rootElement.classList.contains(currentTheme.value)) {
      rootElement.classList.remove(currentTheme.value);
    }

    rootElement.classList.add(className);
    currentTheme.value = className;

    primaryCol.value =
      getComputedStyle(rootElement).getPropertyValue("--primary-color");

    primaryBg.value =
      getComputedStyle(rootElement).getPropertyValue("--primary-bg");

    localStorage.setItem(storageKey, theme);
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme) {
      changeTheme(savedTheme);
    } else {
      changeTheme(defaultTheme);
    }
  });

  return { primaryCol, primaryBg, themes, currentTheme, changeTheme };
}
