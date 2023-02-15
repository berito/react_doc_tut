export const getImageUrl = (imageId, size = 's') => {
    return (

        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    )
}
export function getImageUrlByPerson(person){
    return (
        'https://i.imgur.com/' +
        person.imageId +
        's.jpg'
    );
}