import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useStoreGptData = create()(
  devtools((set) => ({
    expressionData: [],
    cautionData: [],
    terminologyData: [],
    setExpressionData: (expressionData) => set({ expressionData }),
    setCautionData: (cautionData) => set({ cautionData }),
    setTerminologyData: (terminologyData) => set({ terminologyData }),
  }))
);

export default useStoreGptData;
