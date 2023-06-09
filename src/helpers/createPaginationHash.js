export const createPaginationHash = (posts) => {
    let pagination = {};

    let counter = 1;

    while(counter <= 4) {
        pagination[`page${counter}`] = [];
        counter += 1;
    }

    posts.forEach((elem, index) => {
        if(index <= 25) {
            pagination['page1'].push(elem);
        }
        else if(index > 25 && index <= 50) {
            pagination['page2'].push(elem);
        }
        else if(index > 50 && index <= 75) {
            pagination['page3'].push(elem);
        }
        else if(index > 75 && index <= 100) {
            pagination['page4'].push(elem);
        }
    });

    return pagination;
}