import { defineAsyncComponent, defineComponent, reactive, toRaw } from "vue";
import Scrollable, { ScrollAxisType, ScrollToOptions } from "./scrollable";

export default defineComponent({
  name: "scrollable-spec",
  setup() {
    const scrollable = new Scrollable();
    const options: ScrollToOptions = reactive({
      left: 0,
      top: 0,
    });
    const otherOptions: ScrollToOptions = reactive({
      right: 0,
      bottom: 0,
    });
    return () => (
      <>
        <div
          style='width:100px;height:100px;overflow:auto'
          ref={scrollable.nodeRef}
        >
          <div style='width:200px;'>
            <p>scrollTo scrollTo</p>
            <p>scrollTo scrollTo</p>
            <p>scrollTo scrollTo</p>
            <p>scrollTo scrollTo</p>
            <p>target</p>
            <p>scrollTo scrollTo</p>
            <p>scrollTo scrollTo</p>
            <p>scrollTo scrollTo</p>
            <p>scrollTo scrollTo</p>
            <p>scrollTo scrollTo</p>
          </div>
        </div>
        left:
        <input v-model={options.left} />
        top:
        <input v-model={options.top} />
        <button
          onClick={() => {
            const result = toRaw(options);
            for (let key of Object.keys(result)) {
              if (typeof (result as any)[key] === "string") {
                (result as any)[key] = parseInt((result as any)[key]);
              }
            }
            scrollable.scrollTo(result);
          }}
        >
          scroll to
        </button>
        right:
        <input v-model={otherOptions.right} />
        bottom:
        <input v-model={otherOptions.bottom} />
        <button
          onClick={() => {
            const result = toRaw(otherOptions);
            for (let key of Object.keys(result)) {
              if (typeof (result as any)[key] === "string") {
                (result as any)[key] = parseInt((result as any)[key]);
              }
            }
            scrollable.scrollTo(result);
          }}
        >
          scroll to
        </button>
      </>
    );
  },
});
