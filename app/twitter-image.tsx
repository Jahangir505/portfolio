import OpengraphImage from "./opengraph-image";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} - ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default OpengraphImage;
