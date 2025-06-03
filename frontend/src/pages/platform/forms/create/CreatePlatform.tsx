import { Button } from "../../../../components/ui/button/Button";
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../../../../components/ui/dialog/Dialog";
import { Input } from "../../../../components/ui/input/Input";

import { Label } from "../../../../components/ui/label/Label";

import { useState } from "react";
import style from "./CreatePlatform.module.css"; 


export function NewPlatform() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [year, setYear] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className={style.newPlatform}>
      <DialogContent className={style.dialogContent}>
        <DialogHeader>
          <DialogTitle className={style.dialogTitle}>New platform</DialogTitle>
          <DialogClose />
        </DialogHeader>

        <form className={style.form}>
          <div className={style.formGroup}>
            <Label>
              Title<span className={style.required}>*</span>
            </Label>
            <Input
              placeholder="Epic Games"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <Label>Company</Label>
            <Input
              placeholder="Epic"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <Label>Acquisition year</Label>
            <Input
              placeholder="17/05/2019"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <Label>Plataform image (url)</Label>
            <Input
              placeholder="http://cdn...."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
        </form>

        <DialogFooter>
          <Button >
            <p>Save plataform</p>
            <p>+</p>
          </Button>
        </DialogFooter>
      </DialogContent>
    </div>
  );
}