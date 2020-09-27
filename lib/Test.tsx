import { defineComponent } from "vue";
import BIDI from "./global/bidirection.spec";
import BP from "./global/breakpoint.spec";
import PLAT from "./global/platform.spec";
import OVERLAY from "./overlay/overlay.spec";
import CB from "./global/clipboard.spec";
import VR from "./scrolling/viewportRuler.spec";
import SB from "./scrolling/scrollable.spec";
import ACCORDION from "./accordion/accordion.spec";
import VS from "./scrolling/VirtualScroll.spec";
import TV from "./table/tableVirtual.spec";

export default defineComponent({
  name: "test",
  setup() {
    return () => (
      <>
        <h2>bidirection</h2>
        <BIDI />
        <h2>breakpoint</h2>
        <BP />
        <h2>platform</h2>
        <PLAT />
        <h2>overlay</h2>
        <OVERLAY />
        <h2>clipboard</h2>
        <CB />
        <h2>viewport ruler</h2>
        <VR />
        <h2>scrollable</h2>
        <SB />
        <h2>accordion</h2>
        <ACCORDION />
        <h2>virtual scroll</h2>
        <VS />
        <h2>virtual table</h2>
        <TV />
      </>
    );
  },
});
