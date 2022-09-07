import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import EmailField from './Features/Form/FormFields/EmailField';
import TextField from './Features/Form/FormFields/TextField';
import TextareaField from './Features/Form/FormFields/TextareaField';
import RadioField from './Features/Form/FormFields/RadioField';
import { useSelector } from 'react-redux';

function CheckOut() {
    const cartProducts = useSelector((state) => state.cart);
    const subTotal = cartProducts.reduce((total, product) => {
        return total + product.quantity * product.salePrice;
    }, 0);

    const orderInfor = {
        shipping: 30000,
        discount: 0,
    };

    const total = subTotal + orderInfor.shipping - orderInfor.discount;

    const schema = yup
        .object({
            name: yup.string().required('* Vui lòng nhập tên của bạn'),
            email: yup
                .string()
                .required('* Vui lòng nhập địa chỉ email')
                .email('*Vui lòng điền địa chỉ email hợp lệ'),
            phone: yup.number().required('*Vui lòng điền vào trường này'),
            adresss: yup.string().required('* Vui lòng nhập địa chỉ của bạn'),
            paymentmethod: yup
                .string()
                .required('* Vui lòng chọn một phương thức thanh toán'),
        })
        .required();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            adresss: '',
            paymentmethod: '',
        },
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log({ ...data, ...orderInfor, total });
    };

    return (
        <div className="my-28">
            <div className="container px-4 lg:px-8 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 xl:grid-cols-3 xl:grid-flow-col grid-flow-row xl:grid-rows-3  gap-4">
                        <div className="col-span-1 xl:row-span-2  border border-solid border-spacing-2 border-gray-400 shadow-sm">
                            <div className="p-4">
                                <p className="mb-6 text-base font-medium">
                                    THÔNG TIN NGƯỜI DÙNG
                                </p>
                                <TextField
                                    control={control}
                                    name="name"
                                    error={errors.name}
                                />
                                <EmailField
                                    control={control}
                                    name="email"
                                    error={errors.email}
                                />
                                <TextField
                                    control={control}
                                    name="phone"
                                    error={errors.phone}
                                />
                                <TextareaField
                                    control={control}
                                    name="adresss"
                                    error={errors.adresss}
                                />
                            </div>
                        </div>
                        <div className="col-span-1 xl:row-span-1 border border-solid border-spacing-2 border-gray-400 shadow-sm">
                            <div className="p-4 space-y-2">
                                <p className="mb-6 text-base font-medium">
                                    HÌNH THỨC THANH TOÁN
                                </p>
                                <RadioField
                                    control={control}
                                    name="paymentmethod"
                                    error={errors.paymentmethod}
                                />
                            </div>
                        </div>
                        <div className=" col-span-1 xl:row-span-3 xl:col-span-2 border border-solid border-spacing-2 border-gray-400 shadow-sm">
                            <div className="p-4">
                                <p className="mb-6 text-base font-medium">
                                    THÔNG TIN ĐƠN HÀNG
                                </p>
                                <div>
                                    <div className="flex items-center text-base font-medium ">
                                        <div className="flex w-full md:w-1/2 items-center ">
                                            Sản phẩm
                                        </div>
                                        <div className="w-1/2 hidden md:flex justify-between items-center">
                                            <div className="w-full md:w-1/3 mb-1 pl-4">
                                                Đơn giá
                                            </div>
                                            <div className="w-full md:w-1/3 mb-1 pl-4">
                                                Số lượng
                                            </div>
                                            <div className="w-full md:w-1/3 mb-1 pl-4">
                                                Thành tiền
                                            </div>
                                        </div>
                                    </div>
                                    {cartProducts.map((product) => {                                       
                                        return (
                                            <div
                                                key={product.id}
                                                className="mb-3 flex items-center text-sm font-nomal bg-slate-50"
                                            >
                                                <div className="flex flex-col md:flex-row w-1/2 items-center ">
                                                    <div>
                                                        <img
                                                            src={product.image}
                                                            width={140}
                                                            height={140}
                                                            alt={product.title}
                                                        />
                                                    </div>
                                                    <div className="pr-4 w-full truncate">
                                                        <p>{product.title}</p>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 flex flex-col md:flex-row justify-between items-center">
                                                    <div className="w-full md:w-1/3 mb-1 md:mb-0 pl-4 ">
                                                        {new Intl.NumberFormat(
                                                            'vi-VN',
                                                            {
                                                                style: 'currency',
                                                                currency: 'VND',
                                                            },
                                                        ).format(
                                                            product.salePrice,
                                                        )}
                                                    </div>
                                                    <div className="w-full md:w-1/3 mb-1 md:mb-0 pl-4">
                                                        <div className="w-8 flex items-center ">
                                                            <span className="px-2 border border-spacing-2 border-black">
                                                                {
                                                                    product.quantity
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="w-full md:w-1/3 mb-1 md:mb-0 pl-4 ">
                                                        {new Intl.NumberFormat(
                                                            'vi-VN',
                                                            {
                                                                style: 'currency',
                                                                currency: 'VND',
                                                            },
                                                        ).format(
                                                            product.salePrice *
                                                                product.quantity,
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div>
                                    <div className="flex justify-between  text-base font-nomal">
                                        <div className="lg:w-full">Tổng:</div>
                                        <div>
                                            {' '}
                                            {new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(subTotal)}
                                        </div>
                                    </div>
                                    <div className="flex justify-between  text-base font-nomal">
                                        <div className="lg:w-full">Ưu đãi:</div>
                                        <div>
                                            {' '}
                                            {new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(orderInfor.discount)}
                                        </div>
                                    </div>
                                    <div className="flex justify-between  text-base font-nomal">
                                        <div className="lg:w-full">
                                            Phí ship:
                                        </div>
                                        <div>
                                            {' '}
                                            {new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(orderInfor.shipping)}
                                        </div>
                                    </div>
                                    <div className="flex justify-between  text-base font-nomal">
                                        <div className="lg:w-full">
                                            Thành tiền:
                                        </div>
                                        <div>
                                            {new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(total)}
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full mt-3 text-sm font-normal text-center py-1  border border-spacing-2 border-black text-white bg-black hover:cursor-pointer hover:text-black hover:bg-white"
                                    >
                                        HOÀN TẤT ĐƠN HÀNG
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CheckOut;
