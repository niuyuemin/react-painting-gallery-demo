interface Thumbnail {
    href: string
}
interface Image extends Thumbnail{
    templated: boolean
}
interface Links {
    thumbnail: Thumbnail,
    image: Image
}
export interface PaintingData {
    id: string;
    title: string;
    category: string;
    medium: string;
    date: string;
    collecting_institution: string;
    additional_information: string;
    image_rights: string;
    _links: Links
}