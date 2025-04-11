import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
  FormGroup,
  Typography,
  Box,
} from "@mui/material";

function MyForm() {
  // ตั้งค่า useForm พร้อม defaultValues
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      category: "",
      interests: [],
      gender: "",
    },
  });

  // ฟังก์ชันเมื่อ submit form
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
      <Typography variant="h5" gutterBottom>
        MUI + React Hook Form Example
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Name"
            id="name"
            {...register("name", {
              required: "กรุณากรอกชื่อ",
              minLength: {
                value: 3,
                message: "ชื่อต้องมีอย่างน้อย 3 ตัวอักษร",
              },
              maxLength:{
                value:10,
                message:"ชื่อต้องไม่เกิน 10 ตัวอักษร"
              }
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Box>

        {/* Email Field */}
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Email"
            id="email"
            {...register("email", {
              required: "กรุณากรอกอีเมล",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "อีเมลไม่ถูกต้อง",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Box>

        {/* Category Field (Select) */}
        <Box sx={{ mb: 2 }}>
          <FormControl fullWidth error={!!errors.category}>
            <FormLabel id="category-label">Category</FormLabel>
            <Controller
              name="category"
              control={control}
              rules={{ required: "กรุณาเลือกหมวดหมู่" }}
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="category-label"
                  id="category"
                  value={field.value || ""}
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  <MenuItem value="">Select...</MenuItem>
                  <MenuItem value="tech">Technology</MenuItem>
                  <MenuItem value="health">Healthcare</MenuItem>
                  <MenuItem value="finance">Finance</MenuItem>
                </Select>
              )}
            />
            {errors.category && (
              <Typography color="error" variant="caption">
                {errors.category.message}
              </Typography>
            )}
          </FormControl>
        </Box>

        {/* Interests Field (Checkbox) */}
        <Box sx={{ mb: 2 }}>
          <FormControl error={!!errors.interests}>
            <FormLabel>Interests</FormLabel>
            <Controller
              name="interests"
              control={control}
              rules={{ required: "กรุณาเลือกอย่างน้อย 1 รายการ" }}
              render={({ field }) => (
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={field.value.includes("coding")}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...field.value, "coding"]
                            : field.value.filter((v) => v !== "coding");
                          field.onChange(newValue);
                        }}
                      />
                    }
                    label="Coding"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={field.value.includes("design")}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...field.value, "design"]
                            : field.value.filter((v) => v !== "design");
                          field.onChange(newValue);
                        }}
                      />
                    }
                    label="Design"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={field.value.includes("music")}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...field.value, "music"]
                            : field.value.filter((v) => v !== "music");
                          field.onChange(newValue);
                        }}
                      />
                    }
                    label="Music"
                  />
                </FormGroup>
              )}
            />
            {errors.interests && (
              <Typography color="error" variant="caption">
                {errors.interests.message}
              </Typography>
            )}
          </FormControl>
        </Box>

        {/* Gender Field (Radio) */}
        <Box sx={{ mb: 2 }}>
          <FormControl error={!!errors.gender}>
            <FormLabel>Gender</FormLabel>
            <Controller
              name="gender"
              control={control}
              rules={{ required: "กรุณาเลือกเพศ" }}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  row
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              )}
            />
            {errors.gender && (
              <Typography color="error" variant="caption">
                {errors.gender.message}
              </Typography>
            )}
          </FormControl>
        </Box>

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default MyForm;