import axios from "axios";

const productSave = async (params, names, descriptions, images, active, id, product_memory_id) => {
    const token = localStorage.getItem('jwt_token');
    const url = "/api/auth/product/save";
    const body = {
        names: names,
        descriptions: descriptions,
        shop_id: params['shop'],
        brand_id: params['brand'],
        category_id: params['category'],
        package_count: params['package_count'],
        price: params['price'],
        quantity: params['quantity'],
        unit: params['unit'],
        weight: params['weight'],
        feature_type: params['feature_type'],
        images: images,
        active: active,
        id: id,
        product_memory_id: product_memory_id
    };

    console.log(body);

    const headers = {
        "Authorization": "Bearer " + token
    }

    // const response = await axios({
    //     method: 'post',
    //     url: url,
    //     data: body,
    //     headers: headers
    // });
    // console.log(response);
    return response;
}

export default productSave;
