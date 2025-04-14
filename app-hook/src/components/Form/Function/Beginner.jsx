import { useForm, Controller } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// ลงทะเบียน Chart.js components
ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Beginner = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skills: [],
      gender: "",
      file: null,
    },
  });

  // State สำหรับเก็บข้อมูลกราฟ
  const [chartData, setChartData] = useState({
    skills: null,
    gender: null,
  });

  // State สำหรับ preview ภาพ
  const [preview, setPreview] = useState(null);

  const skillsList = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ];

  const genderList = [
    { value: "man", label: "Man" },
    { value: "woman", label: "Woman" },
    { value: "lgbtq", label: "LGBTQ" },
    { value: "none", label: "None" },
  ];

  const onSubmit = (data) => {
    console.log(data);

    // เตรียมข้อมูลสำหรับ Bar Chart (นับทักษะ)
    const skillsCounts = skillsList.map((skill) => ({
      label: skill.label,
      count: data.skills.includes(skill.value) ? 1 : 0,
    }));

    // เตรียมข้อมูลสำหรับ Pie Chart (นับเพศ)
    const genderCounts = genderList.map((gender) => ({
      label: gender.label,
      count: data.gender === gender.value ? 1 : 0,
    }));

    // อัพเดท chartData
    setChartData({
      skills: {
        labels: skillsCounts.map((s) => s.label),
        datasets: [
          {
            label: "Skills Selected",
            data: skillsCounts.map((s) => s.count),
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
          },
        ],
      },
      gender: {
        labels: genderCounts.map((g) => g.label),
        datasets: [
          {
            label: "Gender Distribution",
            data: genderCounts.map((g) => g.count),
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
          },
        ],
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Checkbox */}
        <div>
          <FormControl>
            <FormLabel>Choose skills</FormLabel>
            <Controller
              name="skills"
              control={control}
              render={({ field }) => (
                <>
                  {skillsList.map((skill) => (
                    <FormControlLabel
                      key={skill.value}
                      label={skill.label}
                      control={
                        <Checkbox
                          checked={field.value.includes(skill.value)}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...field.value, skill.value]
                              : field.value.filter((v) => v !== skill.value);
                            field.onChange(newValue);
                          }}
                        />
                      }
                    />
                  ))}
                </>
              )}
            />
          </FormControl>
        </div>

        {/* Radio */}
        <div>
          <Controller
            name="gender"
            control={control}
            rules={{ required: "กรุณาเลือกเพศ" }}
            render={({ field, fieldState: { error } }) => (
              <FormControl error={!!error}>
                <FormLabel>Choose gender</FormLabel>
                <RadioGroup
                  {...field}
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  {genderList.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      label={item.label}
                      control={<Radio />}
                    />
                  ))}
                </RadioGroup>
                {error && <p style={{ color: "red" }}>{error.message}</p>}
              </FormControl>
            )}
          />
        </div>

        {/* File Input */}
        <div>
          <FormControl error={!!errors.file}>
            <FormLabel>Upload Image</FormLabel>
            <Controller
              name="file"
              control={control}
              rules={{
                required: "กรุณาเลือกไฟล์",
                validate: (file) =>
                  file && ["image/jpeg", "image/png"].includes(file.type)
                    ? true
                    : "ต้องเป็นไฟล์ JPG หรือ PNG เท่านั้น",
              }}
              render={({ field: { onChange, ref } }) => (
                <input
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    onChange(file);
                    if (file) {
                      setPreview(URL.createObjectURL(file));
                    } else {
                      setPreview(null);
                    }
                  }}
                  ref={ref}
                />
              )}
            />
            {errors.file && <p style={{ color: "red" }}>{errors.file.message}</p>}
            {preview && (
              <img
                src={preview}
                alt="Preview"
                style={{ maxWidth: "200px", marginTop: "10px" }}
              />
            )}
          </FormControl>
        </div>

        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>

      {/* แสดงกราฟ */}
      <div style={{ marginTop: "20px" }}>
        {chartData.skills && (
          <div style={{ maxWidth: "400px" }}>
            <h3>Skills Chart</h3>
            <Bar
              data={chartData.skills}
              options={{
                scales: {
                  y: { beginAtZero: true, max: 1 },
                },
              }}
            />
          </div>
        )}
        {chartData.gender && (
          <div style={{ maxWidth: "400px", marginTop: "20px" }}>
            <h3>Gender Chart</h3>
            <Pie data={chartData.gender} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Beginner;