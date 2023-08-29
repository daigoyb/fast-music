import { Text } from "@sanity/ui";
import { LogoProps } from "sanity";

export default function FastLogo({ title }: LogoProps) {
    return (
        <Text style={{ color: 'magenta', fontWeight: 'bold' }}>
            {title.toUpperCase()}
        </Text>
    )
}