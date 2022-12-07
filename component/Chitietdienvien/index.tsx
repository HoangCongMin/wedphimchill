import axios from "axios";
import Popular from "../Popular";
import Styles from "../Chitietdienvien/Chitietdienvien.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function Chitietdienvien({
  pepleo,
  pepleorecomendations,
  title,
  titlenumber,
  movie,
  handle,
}: any) {
  const handlemovie = () => handle(movie + 21)
                               

  console.log(pepleorecomendations.length)
  console.log(movie)

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.wrapperone}>
        <div className={Styles.itemtow}>
          <div className={Styles.imgpepleo}>
            <img
              src={`https://image.tmdb.org/t/p/original/${pepleo.profile_path}`}
              alt=""
            />
          </div>
          <div className={Styles.slide}>
            <div className={Styles.slideitem}>
              <h2 className={Styles.titlename}>{pepleo.name}</h2>
              <div className={Styles.thongtin}>
                <p className={Styles.thongtinitem}>
                  {" "}
                  <strong>birthday : </strong>
                  {pepleo.birthday}{" "}
                </p>
                <p className={Styles.thongtinitem}>
                  {" "}
                  <strong>known for department : </strong>
                  {pepleo.known_for_department}
                </p>
                <p className={Styles.thongtinitem}>
                  {" "}
                  <strong>place of birth : </strong>
                  {pepleo.place_of_birth}
                </p>
                <p className={Styles.thongtinitem}>
                  <strong>also known as : </strong>
                  {pepleo.also_known_as}
                </p>
                <p className={Styles.thongtinitem}>
                  <strong>popularity : </strong>
                  {pepleo.popularity}
                </p>
                <p className={Styles.thongtinitem}>
                  <strong>gender : </strong>
                  {pepleo.gender == 2 ? "male" : "female"}
                </p>
              </div>
              <Popular
                title={"Known For"}
                titlename={'chi-tiet'}
                skyblue
                Popular={pepleorecomendations}
              ></Popular>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.wrappertwo}>
        <div className={Styles.biographyall}>
          <h3 className={Styles.biographytitle}>biography</h3>
          <p className={Styles.biographycontent}>{pepleo.biography}</p>
        </div>
      </div>
      <div className={Styles.wrapperthree}>
        <div className={Styles.Actingall}>
          <h3 className={Styles.biographytitle}>Acting</h3>
          <div className={Styles.Actingallwrapper}>
            {pepleorecomendations.slice(0, movie).map((item: any) => (
              <div className={Styles.Actingallitem} key={item.id}>
                <Tippy
                  placement={"top"}
                  interactive={true}
                  content={
                    <Link href={`/${title || titlenumber}/${item.id}`}>
                      <div className={Styles.tippyall}>
                        <div className={Styles.tippyallitem}>
                          <div className={Styles.tippyitemone}>
                            <img
                              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                              alt=""
                            />
                          </div>
                          <div className={Styles.tippyitemtwo}>
                            <h3>{item.original_title}</h3>
                            <p>{item.overview}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  }
                >
                  <Link
                    className={Styles.itemcontent}
                    href={`/${title || titlenumber}/${item.id}`}
                  >
                    {item.original_title} : as{" "}
                  </Link>
                </Tippy>
                <span>{item.character}</span>
              </div>
            ))}
          </div>
          <div className={Styles.buttonloadmore}>
            <button onClick={handlemovie}>
              LOAD MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chitietdienvien;
