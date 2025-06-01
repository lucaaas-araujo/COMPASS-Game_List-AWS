import { Button } from "../../../../components/ui/button/Button";
import {  DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../../../../components/ui/dialog/Dialog";
import { Input } from "../../../../components/ui/input/Input";

import { useState } from "react";
import style from "./UpdatePlatform.module.css"; 


export function EditPlatform() {
  const [title, setTitle] = useState("Epic Games");
  const [company, setCompany] = useState("Epic");
  const [year, setYear] = useState("2019");
  const [imageUrl, setImageUrl] = useState("http://cdn....");

  return (
    <div className={style.editPlatform}>
        <DialogContent className={style.dialogContent}>
          <DialogHeader>
            <DialogTitle className={style.dialogTitle}>
              Edit plataform
            </DialogTitle>
            <DialogClose />
          </DialogHeader>

          <form className={style.form}>
            <div className={style.formGroup}>
              <label>
                Title<span className={style.required}>*</span>
              </label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className={style.formGroup}>
              <label>Company</label>
              <Input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className={style.formGroup}>
              <label>Acquisition year</label>
              <Input
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>

            <div className={style.formGroup}>
              <label>Plataform image (url)</label>
              <Input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
          </form>

          <DialogFooter>
            <Button>
              <p>Edit plataform</p>
              <p>+</p>
            </Button>
          </DialogFooter>
        </DialogContent>
    </div>
  );
}