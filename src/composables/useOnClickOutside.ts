export function useOnClickOutside(targetId: string, callback: () => void) {
  function matchesTarget(element: HTMLElement): boolean {
    let nextElement: HTMLElement | null = element;
    do {
      if (nextElement.id === targetId) {
        return true;
      }
      nextElement = nextElement.parentElement;
    } while (nextElement != null);

    return false;
  }

  function onClickOutside(event: PointerEvent) {
    const clickTarget = event.target;
    if (!clickTarget || !(clickTarget instanceof HTMLElement)) return;

    if (!matchesTarget(clickTarget)) {
      callback();
    }
  }

  addEventListener("click", onClickOutside);
}
