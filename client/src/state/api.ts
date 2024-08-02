// import { createApi } from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: "main",
    tagTypes: ["Kpis"],
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpiResponse>,void>({
            query: () =>"kpi/kpis/",
            providesTags: ["Kpis"]
        }),
    }) 
});

export const { useGetKpisQuery } = api;