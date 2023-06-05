import { OrderStatus } from "../../Enum/OrderStatus";
import { Order } from "../../Model/Order";
import { OrderItem } from "../../Model/OrderItem";
import { PaymentUpLoad } from "../../Model/PaymentUpLoad";
import ResponseApi from "../../Type/ResponseApi";
import ApiConfig from "./ApiConfig";

export const getAll = async () => {
  const response = (await ApiConfig.get<ResponseApi<Order[]>>("/Order")).data;
  let rs = response.data;
  return rs;
};

export const create = async (table: Order): Promise<Order> => {
  let jsonTable = JSON.stringify(table, (key, value) => {
    if (key == "status")
      return Object.keys(OrderStatus)[
        Object.values(OrderStatus).indexOf(value)
      ];
    return value;
  });
  const response = (
    await ApiConfig.post<ResponseApi<Order>>("/Order", jsonTable)
  ).data;
  return response.data;
};

export const addItem = async (item: OrderItem): Promise<OrderItem> => {
  const response = (
    await ApiConfig.post<ResponseApi<OrderItem>>("/ItemOrder", item)
  ).data;
  return response.data;
};

export const getAllItems = async (orderId: number): Promise<OrderItem[]> => {
  const response = (
    await ApiConfig.get<ResponseApi<OrderItem[]>>("/ItemOrder/" + orderId)
  ).data;
  return response.data;
};

export const PaymentOrder = async (payment: PaymentUpLoad): Promise<PaymentUpLoad> => {
  console.log(payment);
  const response = (
    await ApiConfig.post<ResponseApi<PaymentUpLoad>>("/Order/payment", payment)
  ).data;
  return response.data;
};
