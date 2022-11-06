import { useEffect, useState } from "react";

const useRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

export { useRandomColor };
