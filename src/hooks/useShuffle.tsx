import { useEffect, useState } from "react";

// Shuffle an array
export const useShuffle = (array: any[]) =>
  array.sort(() => Math.random() - 0.5);
