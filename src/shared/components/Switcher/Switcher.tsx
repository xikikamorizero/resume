import { useState } from "react";
import style from "./Switcher.module.css";

type Props = {
    dark: boolean;
    editTheme: () => void;
};

export const Switcher = ({ dark, editTheme }: Props) => {
    return (
        <div
            className={style.wrapper}
            style={
                dark
                    ? { background: "#000" }
                    : {
                          background: "rgb(0, 132, 255)",
                      }
            }
        >
            <div
                className={style.circle_container}
                style={dark ? { left: "53px" } : { left: "3px" }}
            >
                <div className={style.circle} onClick={editTheme}>
                    <div
                        className={style.circle_backgroud_moon}
                        style={dark ? { left: "0%" } : { left: "100%" }}
                    >
                        <div
                            className={`${style.circle_backgroud_moon__crater} ${style.crater_1}`}
                        ></div>
                        <div
                            className={`${style.circle_backgroud_moon__crater} ${style.crater_2}`}
                        ></div>
                        <div
                            className={`${style.circle_backgroud_moon__crater} ${style.crater_3}`}
                        ></div>
                    </div>
                </div>

                <div
                    className={`${style.circle_shadow} ${style.shadow_1}`}
                ></div>
                <div
                    className={`${style.circle_shadow} ${style.shadow_2}`}
                ></div>
                <div
                    className={`${style.circle_shadow} ${style.shadow_3}`}
                ></div>
            </div>

            <div
                className={style.wrapper_background_day}
                style={
                    dark
                        ? { top: "100%", opacity: 1, background: "#000" }
                        : {
                              top: "0%",
                              opacity: 1,
                              background: "rgb(0, 132, 255)",
                          }
                }
            >
                <div className={`${style.cloud} ${style.cloud_1}`}></div>
                <div className={`${style.cloud} ${style.cloud_2}`}></div>
                <div className={`${style.cloud} ${style.cloud_3}`}></div>
                <div className={`${style.cloud} ${style.cloud_4}`}></div>
                <div className={`${style.cloud} ${style.cloud_5}`}></div>
                <div className={`${style.cloud} ${style.cloud_6}`}></div>
                <div className={`${style.cloud} ${style.cloud_7}`}></div>

                <div
                    className={`${style.cloud_shadow} ${style.cloud_shadow_1}`}
                ></div>
                <div
                    className={`${style.cloud_shadow} ${style.cloud_shadow_2}`}
                ></div>
                <div
                    className={`${style.cloud_shadow} ${style.cloud_shadow_3}`}
                ></div>
                <div
                    className={`${style.cloud_shadow} ${style.cloud_shadow_4}`}
                ></div>
                <div
                    className={`${style.cloud_shadow} ${style.cloud_shadow_5}`}
                ></div>
                <div
                    className={`${style.cloud_shadow} ${style.cloud_shadow_6}`}
                ></div>
                <div
                    className={`${style.cloud_shadow} ${style.cloud_shadow_7}`}
                ></div>
            </div>

            <div className={`${style.night_star} ${style.star_1}`}></div>
            <div className={`${style.night_star} ${style.star_2}`}></div>
            <div className={`${style.night_star} ${style.star_3}`}></div>
            <div className={`${style.night_star} ${style.star_4}`}></div>
            <div className={`${style.night_star} ${style.star_5}`}></div>
            <div className={`${style.night_star} ${style.star_6}`}></div>
            <div className={`${style.night_star} ${style.star_7}`}></div>
        </div>
    );
};
