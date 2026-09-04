const exercises = [
  // CHEST
  {
    group: "Chest",
    name: "Barbell Bench Press",
    equipment: "Flat Olympic Press station, 7ft Olympic Barbell, Grip Weight Plates",
    primary: "Chest",
    secondary: "Front Shoulder, Triceps",
    difficulty: "Intermediate",
    form: "Lie flat, grip slightly wider than shoulder-width, lower the bar to mid-chest with control and press up to full extension without locking out.",
    cues: "- Keep wrists straight.\n- Don't flare elbows fully out.\n- Maintain 5 points of contact (feet, glutes, upper back, head)."
  },
  {
    group: "Chest",
    name: "Incline Barbell Press",
    equipment: "Incline Bench Press station, 7ft Olympic Barbell, Grip Weight Plates",
    primary: "Upper Chest",
    secondary: "Front Shoulder, Triceps",
    difficulty: "Intermediate",
    form: "Set the incline to ~30–45°, grip just outside shoulder-width, and press the bar in a slight arc toward the upper chest, keeping shoulders back.",
    cues: "- Avoid pressing over the face.\n- Don't push your lower back off the bench heavily.\n- Keep shoulder blades retracted."
  },
  {
    group: "Chest",
    name: "Smith Machine Bench Press",
    equipment: "Smith Machine, Flat Bench, Grip Weight Plates",
    primary: "Chest",
    secondary: "Front Shoulder, Triceps",
    difficulty: "Beginner",
    form: "Position the bench inside the Smith Machine, unrack the bar directly above your chest, lower with a 2-second tempo, and press up without drifting the path.",
    cues: "- Ensure the bar lowers to mid-chest, not the neck.\n- Keep feet planted for stability.\n- Engage core throughout the movement."
  },
  {
    group: "Chest",
    name: "Cable Chest Fly (High-to-Low)",
    equipment: "Dual Adjustable Pulley / Functional Trainer",
    primary: "Lower Chest",
    secondary: "Front Shoulder",
    difficulty: "Intermediate",
    form: "Set pulleys high, step forward into a split stance, and draw the handles down and together in a wide arc, keeping a slight elbow bend throughout.",
    cues: "- Keep a slight bend in the elbows to protect the biceps.\n- Squeeze chest at the bottom.\n- Maintain a proud chest; avoid rounding forward."
  },
  {
    group: "Chest",
    name: "Dumbbell Flat Press",
    equipment: "Flat Bench, Dumbbells",
    primary: "Chest",
    secondary: "Front Shoulder, Triceps",
    difficulty: "Intermediate",
    form: "Lie flat with dumbbells at chest level, press them up until arms are extended, then lower slowly with elbows at ~45° to the torso.",
    cues: "- Keep dumbbells level.\n- Do not forcefully clink bells together at top.\n- Tuck elbows slightly (45 deg) to protect shoulders."
  },
  {
    group: "Chest",
    name: "Chest Fly Machine",
    equipment: "Chest Fly / Rear Delt Machine",
    primary: "Chest",
    secondary: "Front Shoulder",
    difficulty: "Beginner",
    form: "Adjust the seat so handles align with your chest, press the pads together in a controlled arc, and squeeze the chest at full contraction before returning slowly.",
    cues: "- Ensure elbows remain high but slightly below shoulders.\n- Control the lowering phase; don't let it slam back.\n- Keep your back flat against the pad."
  },

  // BACK
  {
    group: "Back",
    name: "Lat Pulldown",
    equipment: "Lat Pulldown Machine",
    primary: "Lats (Outer Back)",
    secondary: "Biceps, Mid-Back, Upper Back",
    difficulty: "Beginner",
    form: "Sit with thighs anchored, grip wide overhand, lean back slightly, and pull the bar to your upper chest by driving your elbows down and back.",
    cues: "- Lead with the elbows.\n- Don't pull behind the neck.\n- Minimize momentum and arching."
  },
  {
    group: "Back",
    name: "Seated Cable Row",
    equipment: "Seated Row Machine",
    primary: "Mid-Back / Mid-Back",
    secondary: "Lats, Biceps, Traps",
    difficulty: "Beginner",
    form: "Sit upright with a slight lean forward, pull the handle into your lower abdomen, squeeze the shoulder blades together at the end, and return with control.",
    cues: "- Do not round the lower back.\n- Avoid leaning back excessively to pull the weight.\n- Focus on squeezing your shoulder blades together at the peak."
  },
  {
    group: "Back",
    name: "Barbell Bent-Over Row",
    equipment: "7ft Olympic Barbell, Grip Weight Plates, Weight Lifting Platform",
    primary: "Lats / Mid-Back",
    secondary: "Lower Back, Biceps, Traps",
    difficulty: "Advanced",
    form: "Hinge at the hips to ~45°, pull the bar to your lower ribcage with a palms-down grip, lead with the elbows, and maintain a neutral spine throughout.",
    cues: "- Keep your lower back braced and neutral.\n- Pull towards the belly button, not the chest.\n- Don't jerk your torso up to move the weight."
  },
  {
    group: "Back",
    name: "Single-Arm Dumbbell Row",
    equipment: "Flat Bench, Dumbbells",
    primary: "Lats",
    secondary: "Biceps, Mid-Back, Upper Back",
    difficulty: "Intermediate",
    form: "Place one hand and knee on the bench for support, pull the dumbbell straight up toward your hip, keeping your elbow close to your torso.",
    cues: "- Pull the bell to your hip (J-curve path).\n- Keep your torso flat; resist rotating your shoulders.\n- Keep your elbow tight to your side."
  },
  {
    group: "Back",
    name: "Cable Straight-Arm Pulldown",
    equipment: "Dual Adjustable Pulley / Functional Trainer",
    primary: "Lats",
    secondary: "Rear Shoulder, Triceps (Long Head)",
    difficulty: "Intermediate",
    form: "Set the pulley high, hold the rope with straight arms, and pull it down to your thighs in a sweeping arc while keeping your core braced.",
    cues: "- Avoid bending the elbows to use triceps.\n- Hinge slightly at the hips.\n- Focus heavily on getting a deep stretch at the top."
  },
  {
    group: "Back",
    name: "Assisted Pull-Up (Chin-Up Grip)",
    equipment: "Assisted Dip / Chin Machine",
    primary: "Lats / Biceps",
    secondary: "Traps, Mid-Back",
    difficulty: "Beginner",
    form: "Use the counterweight to assist, grip the handles palms-up (palms facing you), and pull yourself up until your chin clears the bar, then lower with control.",
    cues: "- Fully extend arms at the bottom.\n- Do not kick your legs for momentum.\n- Puff your chest out to meet the bar."
  },

  // SHOULDERS
  {
    group: "Shoulders",
    name: "Dumbbell Overhead Press",
    equipment: "Dumbbells, Utility Bench (or standing)",
    primary: "Anterior / Side Shoulder",
    secondary: "Triceps, Upper Back/Neck",
    difficulty: "Intermediate",
    form: "Hold dumbbells at ear level with palms facing forward, press straight up overhead until arms are nearly extended, then lower back to start without flaring the elbows excessively.",
    cues: "- Avoid excessive arching in the lower back.\n- Keep forearms stacked vertically beneath dumbbells.\n- Press slightly backwards, ending with biceps by ears."
  },
  {
    group: "Shoulders",
    name: "Dumbbell Lateral Raise",
    equipment: "Dumbbells",
    primary: "Side Shoulder",
    secondary: "Front Shoulder, Upper Back/Neck",
    difficulty: "Beginner",
    form: "Stand with a slight forward lean, raise the dumbbells out to your sides with a slight elbow bend until they reach shoulder height, leading with the elbows.",
    cues: "- Initiate the lift with your elbows, not wrists.\n- Do not swing your torso for momentum.\n- Pinkies slightly up at the top (like pouring water)."
  },
  {
    group: "Shoulders",
    name: "Cable Face Pull",
    equipment: "Dual Adjustable Pulley / Functional Trainer, Mag Handle / Rope",
    primary: "Rear Deltoid / shoulder stabilizers",
    secondary: "Mid-Back, Mid-Back",
    difficulty: "Intermediate",
    form: "Set the cable at forehead height, pull the rope toward your face while externally rotating your arms so your hands finish beside your ears.",
    cues: "- Flare the elbows high and wide.\n- Point the thumbs backward.\n- Keep your chest tall."
  },
  {
    group: "Shoulders",
    name: "Rear Delt Machine Fly",
    equipment: "Chest Fly / Rear Delt Machine",
    primary: "Rear Deltoid",
    secondary: "Mid-Back, Mid-Back",
    difficulty: "Beginner",
    form: "Face the machine pad, grip the rear handles with arms extended, and squeeze the handles apart in a wide arc, leading with the elbows and not the hands.",
    cues: "- Retract the shoulders gently, don't over-shrug.\n- Press the chest firmly into the pad.\n- Focus on sweeping widely, not just pulling back."
  },
  {
    group: "Shoulders",
    name: "Smith Machine Overhead Press",
    equipment: "Smith Machine, Utility Bench, Grip Weight Plates",
    primary: "Front Shoulder",
    secondary: "Triceps, Upper Back/Neck",
    difficulty: "Beginner",
    form: "Sit upright on a bench inside the Smith, unrack the bar just in front of your nose, press straight up to full extension, and lower with control to chin height.",
    cues: "- Find the natural bar path so it drops just in front of your face.\n- Ensure the bench is fully upright or at an 85° angle.\n- Don't bounce the weight at the bottom."
  },
  {
    group: "Shoulders",
    name: "Dumbbell Front Raise",
    equipment: "Dumbbells",
    primary: "Front Shoulder",
    secondary: "Upper Chest",
    difficulty: "Beginner",
    form: "Stand with dumbbells in front of your thighs, raise them alternately or together to shoulder height with straight arms, then lower slowly.",
    cues: "- Avoid rocking back and forth.\n- Don't shrug your shoulders up to lift.\n- Control the descent strictly."
  },

  // BICEPS
  {
    group: "Biceps",
    name: "EZ Bar Curl",
    equipment: "EZ Curl Bar, Grip Weight Plates",
    primary: "Biceps",
    secondary: "Side Bicep, Forearm Flexors",
    difficulty: "Beginner",
    form: "Stand with the EZ bar at arm's length using a semi-palms-up grip, curl the bar to shoulder height while keeping elbows pinned to your sides, then lower fully.",
    cues: "- Do not use hip swing/momentum.\n- Keep elbows glued to the ribs.\n- Extend arms completely at the bottom."
  },
  {
    group: "Biceps",
    name: "Preacher Curl (Barbell)",
    equipment: "Preacher Curl Station, EZ Curl Bar / Short Barbell, Grip Weight Plates",
    primary: "Biceps (long head isolation)",
    secondary: "Side Bicep, Forearm Muscle",
    difficulty: "Intermediate",
    form: "Sit with the back of your upper arms flat against the preacher pad, curl the bar up to peak contraction, then extend fully for a complete stretch at the bottom.",
    cues: "- Ensure your armpits sit flush with the top of the pad.\n- Don't lift your elbows off the pad at the bottom.\n- Lower slowly to avoid bicep tears under heavy load."
  },
  {
    group: "Biceps",
    name: "Dumbbell Hammer Curl",
    equipment: "Dumbbells",
    primary: "Side Bicep / Biceps",
    secondary: "Forearm Muscle (Forearms)",
    difficulty: "Beginner",
    form: "Hold dumbbells with a palms facing each other (palms facing each other) and curl them alternately to shoulder height while keeping your elbows stationary at your sides.",
    cues: "- Avoid swinging the body.\n- Squeeze the handle tightly to engage forearms.\n- Curl across the body slightly if regular form strains elbows."
  },
  {
    group: "Biceps",
    name: "Cable Bicep Curl",
    equipment: "Dual Adjustable Pulley / Functional Trainer",
    primary: "Biceps",
    secondary: "Side Bicep, Forearm Flexors",
    difficulty: "Beginner",
    form: "Set the cable low, grip the bar with a palms-up grip, and curl upward while keeping constant tension through the cable. Do not swing at the top.",
    cues: "- Use the cable's direct tension; don't rush the tempo.\n- Walk back one step to keep tension at the very bottom.\n- Maintain an upright posture."
  },
  {
    group: "Biceps",
    name: "Incline Dumbbell Curl",
    equipment: "Adjustable Bench (incline), Dumbbells",
    primary: "Biceps (long head stretch)",
    secondary: "Side Bicep, Forearm Muscle",
    difficulty: "Intermediate",
    form: "Set the bench to ~60° incline, let arms hang straight down, and curl the dumbbells with a palms-up grip. The stretched starting position maximises long-head tension.",
    cues: "- Let your arms hang completely straight behind your torso.\n- Roll your wrists outward to maximize bicep peak contraction.\n- Don't let elbows drift forward during the curl."
  },

  // TRICEPS
  {
    group: "Triceps",
    name: "Skull Crusher",
    equipment: "Flat Bench, EZ Curl Bar, Grip Weight Plates",
    primary: "Triceps",
    secondary: "Elbow Joint Muscle",
    difficulty: "Intermediate",
    form: "Lie on a flat bench holding an EZ bar with a narrow overhand grip. Lower the bar toward your forehead or slightly behind your head by bending the elbows, keeping the upper arms stationary, then extend back up.",
    cues: "- Keep your elbows pointing toward the ceiling, not flaring too far out.\n- Control the lowering phase carefully.\n- Do not move your upper arm; all movement is at the elbow joint."
  },
  {
    group: "Triceps",
    name: "Cable Tricep Pushdown",
    equipment: "Dual Adjustable Pulley / Functional Trainer, Mag Handle",
    primary: "Triceps",
    secondary: "Elbow Joint Muscle",
    difficulty: "Beginner",
    form: "Set the cable high, grip the handle overhand with elbows tucked, and push the bar straight down until arms are fully extended, squeezing the triceps at the bottom.",
    cues: "- Lock the elbows at the sides.\n- Fully straighten the arm downward.\n- Yield only until forearms break 90 degrees on the way up."
  },
  {
    group: "Triceps",
    name: "Overhead Cable Tricep Extension",
    equipment: "Dual Adjustable Pulley / Functional Trainer, Rope Attachment",
    primary: "Triceps (long head)",
    secondary: "Elbow Joint Muscle",
    difficulty: "Intermediate",
    form: "Face away from the cable, hold the rope overhead with elbows bent, and extend your arms forward and up while keeping your upper arms stationary.",
    cues: "- Keep your upper arms beside your head.\n- Hinge slightly at hips to create a stable base.\n- Spread the rope apart at the top peak."
  },
  {
    group: "Triceps",
    name: "Assisted Tricep Dip",
    equipment: "Assisted Dip / Chin Machine",
    primary: "Triceps",
    secondary: "Chest, Front Shoulders",
    difficulty: "Beginner",
    form: "Use the counterweight for assistance, grip the parallel bars, lean slightly forward, lower until elbows reach ~90°, and press back up to straight arms.",
    cues: "- Keep your torso upright to target the triceps.\n- Don't let shoulders roll forward excessively.\n- Maintain control in the lowering phase."
  },
  {
    group: "Triceps",
    name: "Close-Grip Bench Press",
    equipment: "Flat Olympic Press station, 7ft Barbell, Grip Weight Plates",
    primary: "Triceps",
    secondary: "Chest, Front Shoulders",
    difficulty: "Advanced",
    form: "Grip the bar at shoulder-width (no narrower), lower to the lower chest, and press up. The reduced grip width shifts emphasis from the chest to the triceps.",
    cues: "- Tuck your elbows tightly to your sides.\n- Do not grip too close (hands touching) to save your wrists.\n- Lower to the bottom of the sternum."
  },
  {
    group: "Triceps",
    name: "Dumbbell Overhead Tricep Extension",
    equipment: "Dumbbell",
    primary: "Triceps (long head)",
    secondary: "Elbow Joint Muscle",
    difficulty: "Intermediate",
    form: "Hold one dumbbell with both hands overhead, lower it behind your head by bending your elbows, then extend fully, keeping your upper arms close to your ears.",
    cues: "- Brace your core and avoid heavily arching the lower back.\n- Create a diamond/heart shape with your hands under the top plates.\n- Get a deep stretch behind the neck."
  },

  // LEGS (QUADS)
  {
    group: "Legs (Quads)",
    name: "Hack Squat",
    equipment: "Hack Squat Machine, Bumper/Grip Plates",
    primary: "Quadriceps",
    secondary: "Glutes, Inner Thighs, Calves",
    difficulty: "Intermediate",
    form: "Shoulder-width stance on the footplate, unhook the safeties, descend until your thighs are parallel (or deeper), then drive through your heels to full extension.",
    cues: "- Place feet lower on the platform to maximise quad bias.\n- Don't bounce out of the bottom hole.\n- Ensure your back stays flat against the pad at all times."
  },
  {
    group: "Legs (Quads)",
    name: "45° Leg Press",
    equipment: "45 Degree Leg Press, Grip Weight Plates",
    primary: "Quadriceps",
    secondary: "Glutes, Hamstrings, Inner Thighs",
    difficulty: "Beginner",
    form: "Place feet shoulder-width on the sled, release the safeties, lower until thighs reach 90°, then push the platform away without locking your knees at the top.",
    cues: "- DO NOT lock elbows with hands on knees to push.\n- Never fully lock out the knees (bend backwards too far) at the top.\n- Keep your glutes firmly rooted to the seat pad."
  },
  {
    group: "Legs (Quads)",
    name: "Seated Leg Extension",
    equipment: "Seated Leg Extension Machine",
    primary: "Quadriceps (isolation)",
    secondary: "None",
    difficulty: "Beginner",
    form: "Sit with the roller pad on your lower shins, extend your legs until straight, hold for a brief squeeze at the top, then return slowly without letting the weight slam.",
    cues: "- Adjust pad to sit immediately above the top of your shoes.\n- Brace firmly into the seat handles.\n- Pull your toes backwards (pulling your toes up) for better contraction."
  },
  {
    group: "Legs (Quads)",
    name: "Smith Machine Squat",
    equipment: "Smith Machine, Grip Weight Plates",
    primary: "Quadriceps / Glutes",
    secondary: "Hamstrings, Core, Back",
    difficulty: "Intermediate",
    form: "Position the bar across your traps, walk your feet slightly forward of the bar line, squat to parallel, and drive up through your heels to standing.",
    cues: "- Keeping feet slightly forward targets the quads effectively.\n- Press vertically without having to focus on balancing the bar.\n- Make sure core is solidly braced before descending."
  },
  {
    group: "Legs (Quads)",
    name: "Barbell Lunge",
    equipment: "7ft Olympic Barbell, Grip Weight Plates, Weight Lifting Platform",
    primary: "Quadriceps / Glutes",
    secondary: "Hamstrings, Core, Calves",
    difficulty: "Advanced",
    form: "Rest the bar across your upper back, step forward into a long stride, lower your rear knee toward the floor, then push off the front foot to return, keeping your torso upright.",
    cues: "- Keep torso perfectly vertical to load the quads.\n- Ensure the front knee tracks directly over the toes.\n- Push aggressively off the front heel to return."
  },

  // LEGS (HAMSTRINGS)
  {
    group: "Legs (Hamstrings)",
    name: "Seated Leg Curl",
    equipment: "Seated Leg Curl Machine",
    primary: "Hamstrings",
    secondary: "Calves (Upper Calf)",
    difficulty: "Beginner",
    form: "Sit with the roller pad on top of your lower shins, curl the pad back toward your glutes through the full range of motion, then extend slowly under control.",
    cues: "- Secure the lap pad firmly over your thighs.\n- Squeeze hamstrings tightly at the peak contraction.\n- Control the eccentric; do not slam the weight stack."
  },
  {
    group: "Legs (Hamstrings)",
    name: "Romanian Deadlift",
    equipment: "7ft Olympic Barbell, Grip Weight Plates, Weight Lifting Platform",
    primary: "Hamstrings / Glutes",
    secondary: "Lower Back, Forearms, Traps",
    difficulty: "Advanced",
    form: "Hold the bar at hip-width, hinge at the hips while keeping a slight knee bend and a neutral spine. Feel the hamstring stretch at the bottom, then drive the hips forward to stand.",
    cues: "- Push your hips back until you feel a deep stretch in hamstrings.\n- Do NOT reach for the floor; stop when hips stop moving back.\n- Keep the barbell sliding right up and down your thighs/shins."
  },
  {
    group: "Legs (Hamstrings)",
    name: "Dumbbell Romanian Deadlift",
    equipment: "Dumbbells",
    primary: "Hamstrings",
    secondary: "Glutes, Lower Back, Forearms",
    difficulty: "Intermediate",
    form: "Hold dumbbells in front of your thighs, hinge forward with a neutral back until you feel a full hamstring stretch, then squeeze your glutes to return upright.",
    cues: "- Drag dumbbells down the front of the legs.\n- Prevent the back from rounding.\n- Chin tucked neutrally."
  },
  {
    group: "Legs (Hamstrings)",
    name: "Smith Machine Romanian Deadlift",
    equipment: "Smith Machine, Grip Weight Plates",
    primary: "Hamstrings / Glutes",
    secondary: "Lower Back, Forearms",
    difficulty: "Intermediate",
    form: "Set the bar at hip height in the Smith, use an overhand grip, hinge back with control, hold the stretch for a second at the bottom, then return by driving the hips through.",
    cues: "- Allows focus purely on the hip hinge mechanics.\n- Stand slightly away from the bar so it runs along the shins.\n- Squeeze the glutes powerfully at the top."
  },
  {
    group: "Legs (Hamstrings)",
    name: "Cable Pull-Through",
    equipment: "Dual Adjustable Pulley / Functional Trainer, Rope Attachment",
    primary: "Hamstrings / Glutes",
    secondary: "Lower Back, Core",
    difficulty: "Beginner",
    form: "Face away from the cable with the rope between your legs, hinge at the hips until your torso is near parallel, then drive your hips forward to stand tall.",
    cues: "- Arms and shoulders completely relaxed.\n- Let the cable pull your hips backward.\n- Contract the glutes to force the hips through."
  },

  // LEGS (CALVES)
  {
    group: "Legs (Calves)",
    name: "Seated Calf Raise",
    equipment: "Seated Calf Raise Machine, Grip Weight Plates",
    primary: "Lower Calf (Calves)",
    secondary: "None",
    difficulty: "Beginner",
    form: "Place the pads on your lower thighs just above the knees, position the balls of your feet on the edge, drop heels fully for a stretch, then rise onto tiptoes.",
    cues: "- Emphasise the stretch; pause at the bottom for 1-2 seconds.\n- Go onto your highest tiptoes at the peak.\n- Do not bounce the weight."
  },
  {
    group: "Legs (Calves)",
    name: "Standing Calf Raise (Smith Machine)",
    equipment: "Smith Machine, Grip Weight Plates",
    primary: "Upper Calf (Calves)",
    secondary: "Core (Stabilization)",
    difficulty: "Intermediate",
    form: "Stand on a plate or raised surface under the Smith bar, unhook and rise up on the balls of your feet for a full contraction, then lower slowly for a deep stretch.",
    cues: "- Keep knees straight but not hyper-locked.\n- Hold the peak stretch at the bottom to kill momentum.\n- Control the descent strictly."
  },
  {
    group: "Legs (Calves)",
    name: "Leg Press Calf Raise",
    equipment: "45 Degree Leg Press",
    primary: "Upper Calf (Calves)",
    secondary: "None",
    difficulty: "Beginner",
    form: "Place only the balls of your feet at the edge of the sled, straighten your legs, then push through your toes to full pointing your toes and slowly lower back down.",
    cues: "- Keep safety stops engaged on the machine.\n- Ensure feet do not slip off the bottom edge.\n- Keep knees fixed in a very slight bend."
  },
  {
    group: "Legs (Calves)",
    name: "Dumbbell Single-Leg Calf Raise",
    equipment: "Dumbbell, Weight Plate (for elevation)",
    primary: "Upper Calf (one-sided)",
    secondary: "Lower Calf, Stabilizers",
    difficulty: "Intermediate",
    form: "Hold a dumbbell in one hand, stand on one foot on a plate or step, and rise onto the ball of your foot. Pause at the top, then lower fully to maximise the stretch.",
    cues: "- Hold a stationary object with the empty hand for balance.\n- Slow lowering phase to build maximum tension.\n- Complete full range of motion heavily loading the single calf."
  },

  // GLUTES
  {
    group: "Glutes",
    name: "Hip Thrust (Smith Machine)",
    equipment: "Smith Machine, Flat Bench, Grip Weight Plates",
    primary: "Glutes (Butt)",
    secondary: "Hamstrings, Core",
    difficulty: "Intermediate",
    form: "Rest your upper back on the bench, feet flat on the floor under the bar, and thrust your hips upward until your thighs are parallel to the ground, squeezing hard at the top.",
    cues: "- Check a 90-degree angle exists at your knee at the top.\n- Tuck the chin forward; ribs pinned down.\n- Squeeze the glutes aggressively at lockout."
  },
  {
    group: "Glutes",
    name: "Cable Kickback",
    equipment: "Dual Adjustable Pulley / Functional Trainer",
    primary: "Glutes (Butt)",
    secondary: "Hamstrings, Core Stabilizers",
    difficulty: "Beginner",
    form: "Attach the cable low, face the machine, brace on the frame, and kick one leg back in a controlled arc, avoiding hip rotation to keep the movement at the hip joint.",
    cues: "- Don't overextend the lower back.\n- Point the toe slightly outward to involve upper glutes.\n- Move purely from the hip socket, keep upper body frozen."
  },
  {
    group: "Glutes",
    name: "45° Leg Press (High Foot Placement)",
    equipment: "45 Degree Leg Press, Grip Weight Plates",
    primary: "Glutes / Hamstrings",
    secondary: "Quadriceps, Inner Thighs",
    difficulty: "Intermediate",
    form: "Place your feet high on the sled and use a wide stance. This shifts load from the quads toward the glutes and hamstrings as you press through the full range.",
    cues: "- Push distinctly through the heels, not the toes.\n- Squeeze knees out slightly tracking toes.\n- Ensure glutes don't tuck under and lift off the pad."
  },
  {
    group: "Glutes",
    name: "Barbell Sumo Deadlift",
    equipment: "7ft Olympic Barbell, Grip Weight Plates, Weight Lifting Platform",
    primary: "Glutes / Inner Thighs",
    secondary: "Hamstrings, Quads, Lower Back, Traps",
    difficulty: "Advanced",
    form: "Take a wide stance with toes turned out, grip the bar inside your legs, keep your chest tall, and drive through your heels while pushing your knees out to stand.",
    cues: "- Shins must remain vertical against the bar.\n- Hips drop before you initiate the pull.\n- Push the floor away laterally (spread the floor)."
  },
  {
    group: "Glutes",
    name: "Dumbbell Step-Up",
    equipment: "Dumbbells, Utility Bench",
    primary: "Glutes / Quads",
    secondary: "Hamstrings, Core, Grip",
    difficulty: "Intermediate",
    form: "Hold dumbbells at your sides, step one foot onto the bench, drive through that heel to stand fully on the bench, then step down with control, completing all reps on one side.",
    cues: "- Push straight up with the front leg; don't jump off the back leg.\n- Resist placing the rear foot down quickly on the descent.\n- Lean slightly forward over the planted leg to stretch the glute."
  },

  // CORE
  {
    group: "Core",
    name: "Abs Machine Crunch",
    equipment: "Abs Trainer",
    primary: "Abs",
    secondary: "Obliques",
    difficulty: "Beginner",
    form: "Sit in the machine, grip the handles, and flex forward at the waist. Focus on curling the ribcage toward the pelvis rather than pulling with your arms or hip flexors.",
    cues: "- Try not to push excessively with the legs.\n- Exhale forcefully as you crunch forward.\n- Round your back intentionally into a 'C' curve."
  },
  {
    group: "Core",
    name: "Cable Woodchop",
    equipment: "Dual Adjustable Pulley / Functional Trainer",
    primary: "Obliques / Deep Core",
    secondary: "Shoulders, Abs",
    difficulty: "Intermediate",
    form: "Set the cable high on one side, hold with both hands, and rotate your torso diagonally downward across your body while keeping your arms extended and hips stable.",
    cues: "- Keep the arms straight; don't chop with arm strength.\n- Turn the shoulders aggressively.\n- Maintain strong footing on the ground."
  },
  {
    group: "Core",
    name: "Gym Ball Crunch",
    equipment: "Gym Ball (75cm)",
    primary: "Abs",
    secondary: "Deep Core",
    difficulty: "Beginner",
    form: "Lie with your lower back on the ball, feet flat on the floor, and crunch upward by contracting the abs. The ball provides a greater range of motion than a flat floor crunch.",
    cues: "- Keep lower back moulded around the curvature of the ball.\n- Squeeze the core deliberately; do not strain the neck.\n- Get a full stretch over the ball at the bottom."
  },
  {
    group: "Core",
    name: "Adjustable Ab Bench Sit-Up",
    equipment: "Adjustable Ab Bench",
    primary: "Abs / Hip Flexors",
    secondary: "Obliques",
    difficulty: "Intermediate",
    form: "Hook your feet under the roller pads, set an angle that challenges you, and perform a controlled sit-up, lowering all the way down to maximise the lowering phase.",
    cues: "- Try to reduce reliance on flinging momentum.\n- Breathe out deeply ascending.\n- Control the drop heavily; don't just fall backward."
  },
  {
    group: "Core",
    name: "Barbell Rollout",
    equipment: "Short Barbell (4ft or 5ft), Weight Lifting Platform",
    primary: "Deep Core / Core Stability",
    secondary: "Lats, Triceps, Shoulders",
    difficulty: "Advanced",
    form: "Kneel on the platform, grip a loaded barbell with hands shoulder-width, roll forward from the knees until your body is nearly parallel to the floor, then pull back using your abs.",
    cues: "- Do NOT let the lower back intensely arch or droop.\n- The rollout should pivot from the knees and shoulders.\n- Use the core wall to brake and reverse direction."
  },
  {
    group: "Core",
    name: "Medicine Ball Slam",
    equipment: "Medicine Ball (4LBS or 6LBS)",
    primary: "Core / Full Body Power",
    secondary: "Lats, Shoulders, Glutes, Quads",
    difficulty: "Beginner",
    form: "Hold the medicine ball overhead with arms extended, engage your core, and slam it to the floor as hard as possible. Catch on the bounce or pick it up and repeat.",
    cues: "- Squat down alongside the slam to generate power.\n- Throw the ball into the floor with intent.\n- Don't just perform a limp arm swing."
  },

  // CARDIO
  {
    group: "Cardio",
    name: "Treadmill Interval Run",
    equipment: "Commercial Treadmill (CS-XG-V12E)",
    primary: "Cardiovascular System",
    secondary: "Legs (Calves, Quads, Hamstrings)",
    difficulty: "Intermediate",
    form: "Alternate between 60-second high-intensity sprints (16-20 km/h) and 90-second recovery jogs (8-10 km/h), using the incline feature for added resistance when appropriate.",
    cues: "- Strike securely in the middle of the belt.\n- Keep your chest high and gaze forward.\n- Step fully off the belt between extreme bouts if necessary."
  },
  {
    group: "Cardio",
    name: "Curved Treadmill Sprint",
    equipment: "Curved Treadmill (CS-XZ8003C)",
    primary: "Cardiovascular System",
    secondary: "Glutes, Hamstrings, Calves",
    difficulty: "Advanced",
    form: "The curved belt is self-powered by your stride. Lean slightly forward, drive with your posterior chain, and let the curve naturally increase resistance as you push harder.",
    cues: "- Striding further up the front curve increases speed.\n- Back pedal lower down to brake entirely.\n- Don't hold rails while sprinting heavily."
  },
  {
    group: "Cardio",
    name: "Elliptical LISS Cardio",
    equipment: "Elliptical with Inclination (CS-E17)",
    primary: "Cardiovascular System",
    secondary: "Forearms, Shoulders, Quads",
    difficulty: "Beginner",
    form: "Set a moderate resistance and incline, maintain a steady conversational pace for 30-45 minutes, pushing and pulling the handles to engage both upper and lower body simultaneously.",
    cues: "- Maintain solid upright posture.\n- Actually push/pull handles rather than just resting hands on them.\n- Keep foot completely flat."
  },
  {
    group: "Cardio",
    name: "Spin Bike Tabata",
    equipment: "Spin Bike (CS-K8938-3)",
    primary: "Cardiovascular System",
    secondary: "Quads, Glutes",
    difficulty: "Advanced",
    form: "Perform 8 rounds of 20 seconds maximum-effort cycling followed by 10 seconds of rest. Use the resistance dial to add load and increase your flywheel speed as fitness improves.",
    cues: "- Do not attempt without proper clip-in or tightened foot cages.\n- Ensure dial has massive resistance before standing up into a sprint.\n- Focus on the 'pull' up on the pedal, not just the push down."
  },
  {
    group: "Cardio",
    name: "Battling Ropes HIIT",
    equipment: "Battling Ropes",
    primary: "Cardiovascular System",
    secondary: "Shoulders, Core, Forearms",
    difficulty: "Intermediate",
    form: "Anchor the rope at its midpoint, hold one end in each hand, and alternate or simultaneous wave patterns in 30-second bursts, keeping your core tight and knees slightly bent throughout.",
    cues: "- Try entirely fluid, snapping motions sending waves ALL the way to the anchor.\n- Keep chest up and slightly sit into a quarter squat.\n- Grip tightly but remain relaxed through the arms/shoulders."
  },
  {
    group: "Cardio",
    name: "Heavy Bag Boxing Conditioning",
    equipment: "Boxing Bag (40kg)",
    primary: "Cardiovascular System / Upper Body Power",
    secondary: "Shoulders, Core, Calves",
    difficulty: "Intermediate",
    form: "Work in 3-minute rounds using a combination of jabs, crosses, hooks, and body shots. Maintain a fighting stance, keep your hands up, and move your feet between combinations.",
    cues: "- Wrap your hands internally or wear proper gloves always.\n- Snap the punches back immediately, do not merely 'push' the bag.\n- Twist hips powerfully on all crosses and hooks."
  },

  // MOBILITY
  {
    group: "Mobility",
    name: "Squat University: Ankle Mobility Assessment & Fix",
    equipment: "Bodyweight, Resistance Band, or Kettlebell",
    primary: "Ankle Joint (Dorsiflexion)",
    secondary: "Upper Calf / Lower Calf",
    difficulty: "Beginner",
    form: "Use the 5-inch wall test to check ankle mobility. If restricted, perform banded joint mobilizations and loaded stretches (goblet squat holds) to improve ankle flexibility.",
    cues: "- Do not force through a 'pinch' in the front of your ankle.\n- Keep your heel firmly planted on the ground.\n- Perform slow, continuous stretching.",
    video: "https://www.youtube.com/watch?v=IikP_teeLkI"
  },
  {
    group: "Mobility",
    name: "Squat University: The BEST Hip Mobility Routine",
    equipment: "Bodyweight / Mat",
    primary: "Hip Joint",
    secondary: "Glutes (Butt), Lower Back",
    difficulty: "Beginner",
    form: "Perform the Faber test, Thomas Test, and Squat tests. Use the 90/90 stretch, pigeon stretch, and banded hip mobilizations to unglue restricted hips.",
    cues: "- Breathe deeply to allow tissues to relax.\n- Keep your torso tall during seated stretches.\n- Consistent daily work yields the best results.",
    video: "https://www.youtube.com/watch?v=tASa_2DB_ms"
  },
  {
    group: "Mobility",
    name: "Squat University: How to Fix Shoulder Pain & Mobility",
    equipment: "Resistance Band, Light Dumbbells",
    primary: "Shoulder Joint",
    secondary: "Shoulder Stabilizers (Rotator Cuff), Mid-Back",
    difficulty: "Beginner",
    form: "Focus on opening the thoracic spine and strengthening the rotator cuff using band pull-aparts, external rotations, and PVC pipe dislocates.",
    cues: "- Move slowly and continuously without snapping.\n- Avoid overarching the lower back to compensate for stiff shoulders.\n- Stop if sharp pain is felt.",
    video: "https://www.youtube.com/watch?v=d8CuwaUenR4"
  },
  {
    group: "Mobility",
    name: "Squat University: Low Back Pain Relief (McGill Big 3)",
    equipment: "Bodyweight / Mat",
    primary: "Spinal Stability",
    secondary: "Abs, Deep Core, Lower Back",
    difficulty: "Beginner",
    form: "Perform Dr. Stuart McGill's 'Big 3': the McGill Curl-Up, the Side Plank, and the Bird-Dog to build immense core endurance and relieve back pain.",
    cues: "- Brace your core solidly as if expecting a punch.\n- Do not move your spine during the bird-dog; keep it perfectly rigid.\n- Hold each rep for no more than 10 seconds.",
    video: "https://www.youtube.com/watch?v=9KcTz0sOMys"
  },
  {
    group: "Mobility",
    name: "Squat University: How to Fix Knee Pain",
    equipment: "Bodyweight, Step/Box",
    primary: "Knee Joint",
    secondary: "Front Thighs (Quads), Glutes (Butt)",
    difficulty: "Beginner",
    form: "Identify the root cause of the pain (often weak hips or poor ankles). Use the Touchdown Squat or Spanish Squat to comfortably load the knee and tendon.",
    cues: "- Control the lowering phase extremely slowly.\n- Ensure your knee tracks directly over your toes.\n- Avoid movements that recreate a sharp 10/10 pain.",
    video: "https://www.youtube.com/watch?v=KGGUnLvVZKI"
  }
];

const groups = ["All", "Chest", "Back", "Shoulders", "Biceps", "Triceps", "Legs (Quads)", "Legs (Hamstrings)", "Legs (Calves)", "Glutes", "Core", "Cardio", "Mobility"];

const equipments = [
  {
    id: "dual-cable",
    name: "Dual Adjustable Pulley / Cable Station",
    category: "Strength Machines",
    tag: "Selectorized / Cable",
    station: "Functional Trainer",
    desc: "Dual independent weight stacks with multi-position pulleys for versatile isolated and multi-planar movements.",
    muscles: ["Chest", "Back", "Shoulders", "Biceps", "Triceps", "Core"],
    match: e => e.equipment.includes("Dual Adjustable Pulley")
  },
  {
    id: "smith-machine",
    name: "Smith Machine",
    category: "Strength Machines",
    tag: "Guided Barbell Track",
    station: "Compound & Isolation",
    desc: "Fixed vertical barbell track providing stability and integrated safety catches for squats, presses, and thrusts.",
    muscles: ["Chest", "Shoulders", "Quads", "Hamstrings", "Glutes", "Calves"],
    match: e => e.equipment.includes("Smith Machine")
  },
  {
    id: "leg-press",
    name: "45° Leg Press Machine",
    category: "Strength Machines",
    tag: "Plate-Loaded Sled",
    station: "Lower Body Heavy Station",
    desc: "Heavy 45-degree angled sled for massive quad, hamstring, glute, and calf overload with complete back support.",
    muscles: ["Quads", "Glutes", "Hamstrings", "Calves"],
    match: e => e.equipment.includes("45 Degree Leg Press")
  },
  {
    id: "hack-squat",
    name: "Hack Squat Machine",
    category: "Strength Machines",
    tag: "Plate-Loaded",
    station: "Quad Specialist",
    desc: "Angled back pad and shoulder supports designed to place direct, deep tension on the quadriceps.",
    muscles: ["Quads", "Glutes"],
    match: e => e.equipment.includes("Hack Squat")
  },
  {
    id: "chest-fly-rear-delt",
    name: "Chest Fly / Rear Delt Machine",
    category: "Strength Machines",
    tag: "Dual-Arm Selectorized",
    station: "Pec & Delt Deck",
    desc: "Adjustable dual-arm machine for isolated chest flyes and reverse horizontal flyes for the rear deltoids.",
    muscles: ["Chest", "Shoulders (Rear Delt)"],
    match: e => e.equipment.includes("Chest Fly / Rear Delt")
  },
  {
    id: "lat-pulldown",
    name: "Lat Pulldown Machine",
    category: "Strength Machines",
    tag: "Cable Overhead",
    station: "Upper Back Station",
    desc: "High cable pulley station with adjustable thigh pads to build lat width and upper back thickness.",
    muscles: ["Back (Lats)", "Biceps"],
    match: e => e.equipment.includes("Lat Pulldown")
  },
  {
    id: "seated-row",
    name: "Seated Cable Row Machine",
    category: "Strength Machines",
    tag: "Horizontal Cable",
    station: "Mid-Back Station",
    desc: "Low-pulley horizontal cable row with textured footplates for lats, rhomboids, and mid-back density.",
    muscles: ["Back (Mid-Back)", "Lats", "Biceps"],
    match: e => e.equipment.includes("Seated Row")
  },
  {
    id: "leg-extension",
    name: "Seated Leg Extension Machine",
    category: "Strength Machines",
    tag: "Pin-Selected",
    station: "Quad Isolation",
    desc: "Pin-selected knee extension lever station for direct quadriceps tear-drop (vastus medialis) overload.",
    muscles: ["Legs (Quads)"],
    match: e => e.equipment.includes("Seated Leg Extension")
  },
  {
    id: "leg-curl",
    name: "Seated Leg Curl Machine",
    category: "Strength Machines",
    tag: "Pin-Selected",
    station: "Hamstring Isolation",
    desc: "Ergonomic thigh clamp and lever roller to isolate knee flexion and strengthen the hamstring group.",
    muscles: ["Legs (Hamstrings)"],
    match: e => e.equipment.includes("Seated Leg Curl")
  },
  {
    id: "seated-calf-raise",
    name: "Seated Calf Raise Machine",
    category: "Strength Machines",
    tag: "Plate-Loaded",
    station: "Soleus Specialist",
    desc: "Seated knee-clamp station isolating the deeper soleus calf muscle with 90-degree bent knees.",
    muscles: ["Legs (Calves)"],
    match: e => e.equipment.includes("Seated Calf Raise Machine")
  },
  {
    id: "assisted-chin-dip",
    name: "Assisted Dip & Chin-Up Machine",
    category: "Strength Machines",
    tag: "Counter-Weighted",
    station: "Calisthenics Support",
    desc: "Counterbalanced weight knee pad providing assist load for strict pull-ups and tricep bar dips.",
    muscles: ["Back", "Triceps", "Chest", "Biceps"],
    match: e => e.equipment.includes("Assisted Dip")
  },
  {
    id: "abs-trainer",
    name: "Abs Trainer Machine",
    category: "Strength Machines",
    tag: "Selectorized",
    station: "Core Isolation",
    desc: "Seated crunch station with upper torso harness for controlled, progressive-load abdominal flexion.",
    muscles: ["Core (Abs)"],
    match: e => e.equipment.includes("Abs Trainer")
  },
  {
    id: "olympic-flat-bench",
    name: "Flat Olympic Bench Press Station",
    category: "Free Weights & Benches",
    tag: "Olympic Free Weight",
    station: "Chest Benchmark",
    desc: "Competition-width flat bench with solid upright upright barbell catches for standard bench presses.",
    muscles: ["Chest", "Triceps", "Shoulders"],
    match: e => e.equipment.includes("Flat Olympic Press station")
  },
  {
    id: "olympic-incline-bench",
    name: "Incline Bench Press Station",
    category: "Free Weights & Benches",
    tag: "Olympic Free Weight",
    station: "Upper Chest",
    desc: "Fixed incline bench press station for targeting the clavicular head of the chest and front delts.",
    muscles: ["Upper Chest", "Shoulders", "Triceps"],
    match: e => e.equipment.includes("Incline Bench Press station")
  },
  {
    id: "olympic-platform-barbells",
    name: "Olympic Barbells & Lifting Platform",
    category: "Free Weights & Benches",
    tag: "Free Weight / Olympic",
    station: "Compound Platform",
    desc: "7ft Olympic barbells, grip weight plates, and lifting platform for heavy compound pulls and lunges.",
    muscles: ["Back", "Hamstrings", "Quads", "Glutes", "Core"],
    match: e => e.equipment.includes("7ft Olympic Barbell") || e.equipment.includes("Weight Lifting Platform") || e.equipment.includes("7ft Barbell") || e.equipment.includes("Short Barbell")
  },
  {
    id: "preacher-ez-bar",
    name: "Preacher Station & EZ Curl Bar",
    category: "Free Weights & Benches",
    tag: "Arm Isolation",
    station: "Bicep / Tricep Bench",
    desc: "Dedicated preacher curl bench and ergonomic cambered EZ curl bars for bicep peaks and skull crushers.",
    muscles: ["Biceps", "Triceps"],
    match: e => e.equipment.includes("Preacher") || e.equipment.includes("EZ Curl Bar")
  },
  {
    id: "dumbbells-benches",
    name: "Dumbbells & Utility/Flat Benches",
    category: "Free Weights & Benches",
    tag: "Free Weights",
    station: "Dumbbell Rack & Benches",
    desc: "Full rack of dumbbells paired with flat and multi-angle adjustable utility incline benches.",
    muscles: ["Chest", "Back", "Shoulders", "Biceps", "Triceps", "Hamstrings", "Glutes", "Calves"],
    match: e => /dumbbell/i.test(e.equipment) || e.equipment.includes("Utility Bench") || e.equipment.includes("Flat Bench") || e.equipment.includes("Adjustable Bench")
  },
  {
    id: "adjustable-ab-bench",
    name: "Adjustable Ab Bench",
    category: "Free Weights & Benches",
    tag: "Decline Bench",
    station: "Core Station",
    desc: "Decline abdominal bench with padded ankle leg locks for bodyweight and weighted decline sit-ups.",
    muscles: ["Core (Abs)"],
    match: e => e.equipment.includes("Adjustable Ab Bench")
  },
  {
    id: "commercial-treadmill",
    name: "Commercial Treadmill (CS-XG-V12E)",
    category: "Cardio Stations",
    tag: "Motorized Cardio",
    station: "Cardio Deck",
    desc: "Commercial motor treadmill featuring programmable speed and automated incline for aerobic conditioning.",
    muscles: ["Cardiovascular System", "Legs"],
    match: e => e.equipment.includes("CS-XG-V12E")
  },
  {
    id: "curved-treadmill",
    name: "Curved Treadmill (CS-XZ8003C)",
    category: "Cardio Stations",
    tag: "Self-Powered",
    station: "Sprint & HIIT",
    desc: "Motor-free curved slat treadmill powered entirely by user stride for explosive sprints and maximum calorie burn.",
    muscles: ["Cardiovascular System", "Posterior Chain"],
    match: e => e.equipment.includes("CS-XZ8003C")
  },
  {
    id: "elliptical",
    name: "Elliptical Trainer (CS-E17)",
    category: "Cardio Stations",
    tag: "Low-Impact Cardio",
    station: "Cardio Deck",
    desc: "Dual-action elliptical with inclination controls providing low-impact joint-friendly cardiovascular training.",
    muscles: ["Cardiovascular System", "Full Body"],
    match: e => e.equipment.includes("CS-E17")
  },
  {
    id: "spin-bike",
    name: "Spin Bike (CS-K8938-3)",
    category: "Cardio Stations",
    tag: "Flywheel Cycle",
    station: "Cycling Studio",
    desc: "Heavy flywheel fixed-gear spin bike with adjustable resistance dial for high-intensity Tabata and endurance.",
    muscles: ["Cardiovascular System", "Quads", "Glutes"],
    match: e => e.equipment.includes("CS-K8938-3")
  },
  {
    id: "battling-ropes",
    name: "Battling Ropes",
    category: "Cardio Stations",
    tag: "HIIT Conditioning",
    station: "Functional Turf",
    desc: "Heavy 50ft conditioning ropes for upper body power endurance, shoulder stability, and anaerobic capacity.",
    muscles: ["Cardiovascular System", "Shoulders", "Core"],
    match: e => e.equipment.includes("Battling Ropes")
  },
  {
    id: "boxing-bag",
    name: "Heavy Boxing Bag (40kg)",
    category: "Cardio Stations",
    tag: "Striking Conditioning",
    station: "Boxing Zone",
    desc: "40kg hanging leather punching bag for boxing conditioning, punching combinations, and rotational power.",
    muscles: ["Cardiovascular System", "Upper Body Power", "Core"],
    match: e => e.equipment.includes("Boxing Bag")
  },
  {
    id: "functional-mobility",
    name: "Mobility & Functional Accessories",
    category: "Functional & Mobility",
    tag: "Rehab & Recovery",
    station: "Mobility Area",
    desc: "Gym balls (75cm), medicine balls (4-6 lbs), resistance bands, steps, and mats for joint health and rehab.",
    muscles: ["Joint Mobility", "Ankles", "Hips", "Knees", "Spine"],
    match: e => e.group === "Mobility" || e.equipment.includes("Gym Ball") || e.equipment.includes("Medicine Ball")
  }
];

const equipmentCategories = ["All", "Strength Machines", "Free Weights & Benches", "Cardio Stations", "Functional & Mobility"];

// ─── PRE-WORKOUT WARMUP & JOINT MOBILITY PROTOCOLS ───────────────────────────
const warmupProtocols = [
  {
    id: "press-prep",
    category: "Upper Body",
    tag: "Shoulders & Upper Torso",
    title: {
      en: "Upper Body Press Prep",
      mr: "अप्पर बॉडी प्रेस वॉर्मअप (Chest & Shoulders)"
    },
    targetJoints: {
      en: "Glenohumeral (Shoulders), Thoracic Spine, Scapulae",
      mr: "खांदे, वरील पाठीचा कणा (Thoracic) व स्कॅपुला"
    },
    duration: "3-4 min",
    idealBefore: {
      en: "Bench Press, Incline Press, Shoulder Press, Dips",
      mr: "बेंच प्रेस, इन्क्लाइन प्रेस, शोल्डर प्रेस, डिप्स"
    },
    linkedExercises: ["Barbell Bench Press", "Dumbbell Overhead Press", "Incline Barbell Press"],
    steps: [
      {
        num: 1,
        name: { en: "Band Pull-Aparts", mr: "बँड पुल-अपार्ट्स" },
        dose: "2 sets x 15 reps",
        cue: {
          en: "Hold band shoulder-width with straight arms. Pull across chest, pinching shoulder blades without shrugging.",
          mr: "हात सरळ ठेवून बँड ताणा. खांदे वर न उचलता पाठीचे ब्लेड्स एकत्र दाबा."
        }
      },
      {
        num: 2,
        name: { en: "Rotator Cuff External Rotations", mr: "रोटेटर कफ एक्सटर्नल रोटेशन" },
        dose: "2 sets x 12 reps / side",
        cue: {
          en: "Elbow pinned to ribcage at 90 degrees. Rotate forearm outward under light cable/band tension.",
          mr: "कोपरा बरगडीला चिकटवून 90 अंशावर ठेवा आणि हलक्या वजनाने बाहेरच्या दिशेने फिरवा."
        }
      },
      {
        num: 3,
        name: { en: "Bench Thoracic Extension", mr: "थोरासिक पाठीचा विस्तार" },
        dose: "10 controlled reps",
        cue: {
          en: "Hands behind head, elbows high. Extend upper back over bench edge while keeping ribcage braced.",
          mr: "हात डोक्यामागे ठेवून वरची पाठ हळूच मागे ताणा, कंबर स्थिर ठेवा."
        }
      },
      {
        num: 4,
        name: { en: "Scapular Push-Ups (Floor / Incline)", mr: "स्कॅप्युलर पुश-अप्स" },
        dose: "12 reps",
        cue: {
          en: "In plank position with arms straight, bring shoulder blades together then press floor away to spread them.",
          mr: "हात पूर्ण सरळ ठेवून खांद्याची हाडे एकत्र आणा आणि नंतर जमीन दाबून दूर ढकला."
        }
      }
    ]
  },
  {
    id: "squat-prep",
    category: "Lower Body",
    tag: "Hips, Knees & Ankles",
    title: {
      en: "Squat & Knee Mobility Prep",
      mr: "स्क्वॉट व गुडघे मोबिलिटी वॉर्मअप (Quads & Hips)"
    },
    targetJoints: {
      en: "Acetabulofemoral (Hips), Patellofemoral (Knees), Talocrural (Ankles)",
      mr: "कमरेचे जॉईंट्स (Hips), गुडघे (Knees) व घोटे (Ankles)"
    },
    duration: "3-4 min",
    idealBefore: {
      en: "Barbell Squats, Hack Squat, 45° Leg Press, Lunges",
      mr: "बारबेल स्क्वॉट, हॅक स्क्वॉट, लेग प्रेस, लंजेस"
    },
    linkedExercises: ["Hack Squat", "45° Leg Press", "Smith Machine Squat"],
    steps: [
      {
        num: 1,
        name: { en: "Ankle Dorsiflexion Wall Rocks", mr: "घोट्याची डोर्सीफ्लेक्शन मोबिलिटी" },
        dose: "15 reps / side",
        cue: {
          en: "Foot 4 inches from wall, heel flat on floor. Drive knee past toes over pinky toe to increase ankle travel.",
          mr: "टाच जमिनीवर घट्ट ठेवा आणि गुडघा पुढच्या दिशेने भिंतीकडे झुकवून घोट्याची लवचिकता वाढवा."
        }
      },
      {
        num: 2,
        name: { en: "90/90 Hip Mobility Switches", mr: "90/90 हिप मोबिलिटी स्विच" },
        dose: "10 slow switches",
        cue: {
          en: "Sit on floor with both legs at 90-degree angles. Rotate knees side to side to lubricate hip capsules.",
          mr: "जमिनीवर दोन्ही पाय 90 अंशात ठेवून दोन्ही बाजूंना गुडघे हळूहळू फिरवून हिप्स मोकळे करा."
        }
      },
      {
        num: 3,
        name: { en: "Deep Goblet Squat with 3s Bottom Pause", mr: "डीप पॉझ स्क्वॉट (३ सेकंद)" },
        dose: "8 reps",
        cue: {
          en: "Sink into deep squat, use elbows to pry knees outward, pause 3 seconds while breathing into belly.",
          mr: "पूर्ण खाली बसून कोपरांनी गुडघे किंचित बाहेर ढकला आणि 3 सेकंद खोल श्वास घेऊन थांबा."
        }
      },
      {
        num: 4,
        name: { en: "Walking Quad & Hip Flexor Stretch", mr: "क्वॉड व हिप फ्लेक्सर स्ट्रेच" },
        dose: "10 reps / leg",
        cue: {
          en: "Grab ankle behind you, squeeze glute on that leg to stretch anterior thigh, step forward and alternate.",
          mr: "पायाची घोट मागे पकडून मांडीचा पुढील भाग ताणा, ग्लूट घट्ट दाबून पुढे पाऊल टाका."
        }
      }
    ]
  },
  {
    id: "hinge-prep",
    category: "Lower Body",
    tag: "Posterior Chain & Spine",
    title: {
      en: "Hinge & Lower Back Prep",
      mr: "हिंज व पाठीचा कणा वॉर्मअप (Hamstrings & Glutes)"
    },
    targetJoints: {
      en: "Lumbar Spine, Sacroiliac (SI) Joint, Posterior Hip Capsule",
      mr: "कंबर (Lumbar Spine), एसआय जॉईंट व हॅमस्ट्रिंग्स"
    },
    duration: "3-4 min",
    idealBefore: {
      en: "Romanian Deadlift, Barbell Sumo Deadlift, Barbell Rows",
      mr: "रोमानियन डेडलिफ्ट, सुमो डेडलिफ्ट, बारबेल रो"
    },
    linkedExercises: ["Romanian Deadlift", "Barbell Sumo Deadlift", "Seated Leg Curl"],
    steps: [
      {
        num: 1,
        name: { en: "Bird-Dog Contralateral Holds", mr: "बर्ड-डॉग पोझिशन होल्ड" },
        dose: "8 reps / side (2s hold)",
        cue: {
          en: "Hands and knees on mat. Extend opposite arm and leg straight out without arching lower back. Brace abs.",
          mr: "हात व गुडघ्यांवर राहून विरुद्ध हात व पाय सरळ लांबवा, पाठ न वाकवता पोट घट्ट ठेवा."
        }
      },
      {
        num: 2,
        name: { en: "Glute Bridges with 2s Peak Squeeze", mr: "ग्लूट ब्रिजेस (२ सेकंद होल्ड)" },
        dose: "15 reps",
        cue: {
          en: "Lie on back, feet flat. Drive through heels to raise hips until torso aligns with knees. Do not arch lower back.",
          mr: "पाठीवर झोपून टाचा दाबून कंबर वर उचला आणि ग्लूट्स घट्ट पिळून २ सेकंद थांबा."
        }
      },
      {
        num: 3,
        name: { en: "Active Hamstring Sweeps", mr: "अॅक्टिव्ह हॅमस्ट्रिंग स्वीप्स" },
        dose: "10 walking steps",
        cue: {
          en: "Heel forward with toes up. Hinge hips backward and sweep hands down toward floor to stretch posterior chain.",
          mr: "टाच पुढे ठेवून कंबर मागे ढकला आणि हात जमिनीकडे नेऊन मांडीची मागील नस ताणा."
        }
      },
      {
        num: 4,
        name: { en: "Standing Bodyweight Good Mornings", mr: "गुड मॉर्निंग हिंज मोव्हमेंट" },
        dose: "10 reps",
        cue: {
          en: "Fingertips behind head, soft knees. Push hips straight back until hamstring tension is reached, then return.",
          mr: "हात डोक्यामागे, गुडघे किंचित लवचिक ठेवून कंबर थेट मागे ढकलून हिंज पोझिशन साधा."
        }
      }
    ]
  },
  {
    id: "pull-prep",
    category: "Upper Body",
    tag: "Lats, Scapulae & Traps",
    title: {
      en: "Upper Back & Pull Prep",
      mr: "अप्पर बॅक व पुलिंग वॉर्मअप (Lats & Traps)"
    },
    targetJoints: {
      en: "Scapulothoracic Joint, Latissimus Dorsi Origin, Glenohumeral",
      mr: "लॅट्स (Lats), स्कॅपुला व खांद्याची हालचाल"
    },
    duration: "3-4 min",
    idealBefore: {
      en: "Lat Pulldown, Seated Cable Row, Assisted Pull-Up, Barbell Row",
      mr: "लॅट पुलडाउन, सीटेड केबल रो, पुल-अप्स, बारबेल रो"
    },
    linkedExercises: ["Lat Pulldown", "Seated Cable Row", "Assisted Pull-Up (Chin-Up Grip)"],
    steps: [
      {
        num: 1,
        name: { en: "Dead Hang with Scapular Pull-Downs", mr: "डेड हँग व स्कॅप्युलर पुल" },
        dose: "20s hang + 8 depressions",
        cue: {
          en: "Hang from chin-up bar. Without bending elbows, pull shoulder blades down and back, then release.",
          mr: "बारला लटकून हात न वाकवता खांद्याची हाडे खाली खेचा आणि वर सोडा."
        }
      },
      {
        num: 2,
        name: { en: "Straight-Arm Lat Band Pulldowns", mr: "स्ट्रेट-आर्म लॅट बँड पुलडाउन" },
        dose: "15 reps",
        cue: {
          en: "Anchor band high. Keeping elbows slightly bent, sweep hands down to hips by engaging outer lats.",
          mr: "बँड वर बांधून हात किंचित लवचिक ठेवून थेट कमरेकडे ओढा, लॅट्स स्नायू आकुंचन पावतील."
        }
      },
      {
        num: 3,
        name: { en: "Side-Lying Thoracic Open-Books", mr: "थोरासिक ओपन-बुक्स रोटेशन" },
        dose: "8 reps / side",
        cue: {
          en: "Lie on side with knees stacked at 90 degrees. Rotate top arm open across body, following hand with eyes.",
          mr: "एका कुशीवर झोपून गुडघे 90 अंशावर ठेवा आणि वरचा हात दुसऱ्या बाजूला फिरवून छाती उघडा."
        }
      },
      {
        num: 4,
        name: { en: "Prone Y-T-W Scapular Raises", mr: "वाय-टी-डब्ल्यू (Y-T-W) रेजेस" },
        dose: "6 reps per position",
        cue: {
          en: "Lie face down or on 30-degree incline. Raise arms with thumbs pointed up in Y, T, and W positions to activate lower traps.",
          mr: "पोटावर झोपून अंगठा वर ठेवून हात Y, T व W आकारात उचलून पाठीचे छोटे स्नायू सक्रिय करा."
        }
      }
    ]
  }
];

const warmupCategories = ["All", "Upper Body", "Lower Body"];

// ─── 1-TAP EXERCISE ALTERNATIVE SWAPS ─────────────────────────────────────────
const exerciseAlternativesMap = {
  "Barbell Bench Press": ["Dumbbell Flat Press", "Smith Machine Bench Press", "Chest Fly Machine"],
  "Incline Barbell Press": ["Smith Machine Bench Press", "Dumbbell Flat Press"],
  "Smith Machine Bench Press": ["Barbell Bench Press", "Dumbbell Flat Press"],
  "Cable Chest Fly (High-to-Low)": ["Chest Fly Machine", "Dumbbell Flat Press"],
  "Dumbbell Flat Press": ["Barbell Bench Press", "Smith Machine Bench Press"],
  "Chest Fly Machine": ["Cable Chest Fly (High-to-Low)", "Dumbbell Flat Press"],
  "Lat Pulldown": ["Assisted Pull-Up (Chin-Up Grip)", "Seated Cable Row", "Single-Arm Dumbbell Row"],
  "Seated Cable Row": ["Barbell Bent-Over Row", "Single-Arm Dumbbell Row"],
  "Barbell Bent-Over Row": ["Seated Cable Row", "Single-Arm Dumbbell Row"],
  "Single-Arm Dumbbell Row": ["Seated Cable Row", "Barbell Bent-Over Row"],
  "Cable Straight-Arm Pulldown": ["Lat Pulldown", "Assisted Pull-Up (Chin-Up Grip)"],
  "Assisted Pull-Up (Chin-Up Grip)": ["Lat Pulldown", "Cable Straight-Arm Pulldown"],
  "Dumbbell Overhead Press": ["Smith Machine Overhead Press", "Dumbbell Lateral Raise"],
  "Dumbbell Lateral Raise": ["Cable Face Pull", "Dumbbell Overhead Press"],
  "Cable Face Pull": ["Rear Delt Machine Fly", "Dumbbell Lateral Raise"],
  "Rear Delt Machine Fly": ["Cable Face Pull", "Dumbbell Lateral Raise"],
  "Smith Machine Overhead Press": ["Dumbbell Overhead Press", "Dumbbell Lateral Raise"],
  "Dumbbell Front Raise": ["Dumbbell Overhead Press", "Incline Barbell Press"],
  "EZ Bar Curl": ["Dumbbell Hammer Curl", "Cable Bicep Curl", "Incline Dumbbell Curl"],
  "Preacher Curl (Barbell)": ["EZ Bar Curl", "Incline Dumbbell Curl", "Cable Bicep Curl"],
  "Dumbbell Hammer Curl": ["Cable Bicep Curl", "EZ Bar Curl"],
  "Cable Bicep Curl": ["EZ Bar Curl", "Dumbbell Hammer Curl"],
  "Incline Dumbbell Curl": ["EZ Bar Curl", "Preacher Curl (Barbell)"],
  "Skull Crusher": ["Cable Tricep Pushdown", "Close-Grip Bench Press"],
  "Cable Tricep Pushdown": ["Dumbbell Overhead Tricep Extension", "Close-Grip Bench Press"],
  "Overhead Cable Tricep Extension": ["Dumbbell Overhead Tricep Extension", "Cable Tricep Pushdown"],
  "Assisted Tricep Dip": ["Close-Grip Bench Press", "Cable Tricep Pushdown"],
  "Close-Grip Bench Press": ["Cable Tricep Pushdown", "Assisted Tricep Dip"],
  "Dumbbell Overhead Tricep Extension": ["Overhead Cable Tricep Extension", "Cable Tricep Pushdown"],
  "Hack Squat": ["45° Leg Press", "Smith Machine Squat", "Barbell Lunge"],
  "45° Leg Press": ["Hack Squat", "Smith Machine Squat", "Barbell Lunge"],
  "Seated Leg Extension": ["Smith Machine Squat", "Barbell Lunge"],
  "Smith Machine Squat": ["Hack Squat", "45° Leg Press", "Barbell Lunge"],
  "Barbell Lunge": ["Smith Machine Squat", "Hack Squat"],
  "Seated Leg Curl": ["Romanian Deadlift", "Smith Machine Romanian Deadlift", "Cable Pull-Through"],
  "Romanian Deadlift": ["Dumbbell Romanian Deadlift", "Smith Machine Romanian Deadlift"],
  "Dumbbell Romanian Deadlift": ["Romanian Deadlift", "Smith Machine Romanian Deadlift"],
  "Smith Machine Romanian Deadlift": ["Romanian Deadlift", "Dumbbell Romanian Deadlift"],
  "Cable Pull-Through": ["Romanian Deadlift", "Seated Leg Curl"],
  "Seated Calf Raise": ["Standing Calf Raise (Smith Machine)", "Leg Press Calf Raise"],
  "Standing Calf Raise (Smith Machine)": ["Leg Press Calf Raise", "Dumbbell Single-Leg Calf Raise"],
  "Leg Press Calf Raise": ["Standing Calf Raise (Smith Machine)", "Seated Calf Raise"],
  "Dumbbell Single-Leg Calf Raise": ["Standing Calf Raise (Smith Machine)", "Leg Press Calf Raise"],
  "Hip Thrust (Smith Machine)": ["Barbell Sumo Deadlift", "Cable Kickback", "45° Leg Press (High Foot Placement)"],
  "Cable Kickback": ["Hip Thrust (Smith Machine)", "Barbell Sumo Deadlift"],
  "45° Leg Press (High Foot Placement)": ["Hack Squat", "Hip Thrust (Smith Machine)"],
  "Barbell Sumo Deadlift": ["Romanian Deadlift", "Hip Thrust (Smith Machine)"],
  "Dumbbell Step-Up": ["Barbell Lunge", "Hack Squat"],
  "Abs Machine Crunch": ["Cable Woodchop", "Hanging Leg Raise"],
  "Cable Woodchop": ["Abs Machine Crunch", "Hanging Leg Raise"],
  "Hanging Leg Raise": ["Abs Machine Crunch", "Cable Woodchop"]
};

function getExerciseAlternatives(ex) {
  if (exerciseAlternativesMap[ex.name]) {
    return exerciseAlternativesMap[ex.name];
  }
  // Fallback: 2 distinct exercises from the same primary muscle or group
  const samePrimary = exercises
    .filter(e => e.name !== ex.name && e.primary === ex.primary)
    .map(e => e.name);
  if (samePrimary.length >= 2) return samePrimary.slice(0, 2);
  const sameGroup = exercises
    .filter(e => e.name !== ex.name && e.group === ex.group)
    .map(e => e.name);
  return sameGroup.slice(0, 2);
}

// ─── STATE MANAGEMENT ────────────────────────────────────────────────────────
let activeMode = "muscles";
let activeGroup = "All";
let activeEquipmentId = null;
let activeEquipmentCategory = "All";
let activeWarmupCategory = "All";
let searchQuery = "";
let bodyMapVisible = false;

// ─── LOCALIZATION (ENGLISH ↔ MARATHI) ─────────────────────────────────────────
const translations = {
  en: {
    headerSubhead: "Pandharpur · 90 11 44 5000",
    tabMuscles: "Muscle Groups",
    tabEquipment: "Equipment & Machines",
    tabWarmup: "Warmup & Prep",
    searchPlaceholder: "Search exercises, machines, muscles...",
    showBodyMap: "Anatomy Guide",
    hideBodyMap: "Hide Anatomy Guide",
    bodyMapLabel: "Interactive Anatomy Guide",
    bodyViewHint: "Tap any muscle to zoom in and inspect how it works",
    muscleSectionLabel: "Filter by Muscle Group",
    equipmentSectionLabel: "NSC Gym Equipment & Machine Directory",
    equipmentSubhead: "Select any machine or station to inspect matching exercises",
    warmupSectionLabel: "Pre-Workout Activation & Joint Mobility",
    warmupSubhead: "3-minute orthopedic prep routines to prime joints and reduce injury risk before lifting",
    activeFilterPrefix: "Active Filter:",
    clearFilterBtn: "Reset Filter",
    watchTutorial: "Watch Video",
    commonCues: "Form Cues & Key Mechanics:",
    secondaryMuscles: "Secondary Synergists:",
    darkMode: "Dark",
    lightMode: "Light",
    allExercises: "All Exercises",
    musclesTabMob: "Muscles",
    equipTabMob: "Machines",
    warmupTabMob: "Warmup",
    bodyTabMob: "Anatomy",
    zoomBackText: "Back to Full Body",
    viewExercisesText: "View Matching Exercises",
    whatItDoes: "What it does:",
    keyMovements: "Key NSC movements:",
    muscleParts: "Anatomical regions:",
    focusedViewBadge: "Focused Muscle View",
    showExercises: "Show Exercises",
    machineBusyTitle: "Station busy? 1-Tap alternative:",
    printQrBtnLabel: "Print Floor QR Stickers",
    qrModalTitle: "Gym Floor QR Code Stickers",
    qrModalSubhead: "Printable high-contrast QR stickers for gym machines. Lifters scan with phone camera to open verified exercise cues.",
    qrPrintNowLabel: "Print A4 Sticker Sheet",
    qrCloseLabel: "Close",
    targetJointsLabel: "Target Joints & Capsule:",
    idealBeforeLabel: "Recommended Before:",
    allProtocols: "All Protocols",
    upperBodyPrep: "Upper Body",
    lowerBodyPrep: "Lower Body",
    startThisWorkout: "View Station Exercises",
    qrScanHint: "Scan with phone camera for verified form cues"
  },
  mr: {
    headerSubhead: "पंढरपूर · 90 11 44 5000",
    tabMuscles: "स्नायू गट",
    tabEquipment: "जिम मशिन्स व साहित्य",
    tabWarmup: "वॉर्मअप व मोबिलिटी",
    searchPlaceholder: "व्यायाम, मशीन, स्नायू शोधा...",
    showBodyMap: "अॅनाटॉमी मार्गदर्शक",
    hideBodyMap: "मार्गदर्शक लपवा",
    bodyMapLabel: "स्नायू व शरीरशास्त्र मार्गदर्शक",
    bodyViewHint: "तपशील पाहण्यासाठी कोणत्याही स्नायूवर टॅप करा",
    muscleSectionLabel: "स्नायू गटानुसार व्यायाम",
    equipmentSectionLabel: "नेताजी स्पोर्ट्स क्लब जिम मशिन्स व साहित्य",
    equipmentSubhead: "त्या मशीनवरील व्यायाम पाहण्यासाठी मशीन निवडा",
    warmupSectionLabel: "व्यायामापूर्वी वॉर्मअप व जॉईंट मोबिलिटी",
    warmupSubhead: "जॉईंट्स व स्नायू सक्रिय करून दुखापती टाळण्यासाठी ३ मिनिटांचे खात्रीशीर व्यायाम",
    activeFilterPrefix: "सध्याचे फिल्टर:",
    clearFilterBtn: "फिल्टर काढा",
    watchTutorial: "व्हिडिओ पहा",
    commonCues: "महत्त्वाच्या सूचना व सामान्य चुका:",
    secondaryMuscles: "दुय्यम स्नायू (Synergists):",
    darkMode: "डार्क",
    lightMode: "लाइट",
    allExercises: "सर्व व्यायाम",
    musclesTabMob: "स्नायू",
    equipTabMob: "मशिन्स",
    warmupTabMob: "वॉर्मअप",
    bodyTabMob: "अॅनाटॉमी",
    zoomBackText: "संपूर्ण शरीर दृश्य",
    viewExercisesText: "संबंधित व्यायाम पहा",
    whatItDoes: "मुख्य कार्य:",
    keyMovements: "महत्त्वाचे व्यायाम प्रकार:",
    muscleParts: "स्नायूंचे भाग:",
    focusedViewBadge: "स्नायू तपशील",
    showExercises: "व्यायाम पहा",
    machineBusyTitle: "मशीन रिकामी नाही? पर्यायी व्यायाम:",
    printQrBtnLabel: "फ्लोअर QR स्टिकर्स प्रिंट करा",
    qrModalTitle: "जिम फ्लोअर मशीन QR कोड स्टिकर्स",
    qrModalSubhead: "मशीनवर लावण्यासाठी प्रिंट करण्यायोग्य QR स्टिकर्स. कॅमेऱ्याने स्कॅन करताच थेट योग्य फॉर्म व व्यायाम उघडतील.",
    qrPrintNowLabel: "A4 स्टिकर शीट प्रिंट करा",
    qrCloseLabel: "बंद करा",
    targetJointsLabel: "लक्ष्य सांधे (Joints):",
    idealBeforeLabel: "खालील व्यायामापूर्वी उपयुक्त:",
    allProtocols: "सर्व वॉर्मअप",
    upperBodyPrep: "अप्पर बॉडी",
    lowerBodyPrep: "लोअर बॉडी",
    startThisWorkout: "संबंधित व्यायाम पहा",
    qrScanHint: "योग्य तंत्र व फॉर्म पाहण्यासाठी फोनने स्कॅन करा"
  }
};

const muscleTranslations = {
  "All": { en: "All", mr: "सर्व (All)" },
  "Chest": { en: "Chest", mr: "छाती (Chest)" },
  "Back": { en: "Back", mr: "पाठ (Back)" },
  "Shoulders": { en: "Shoulders", mr: "खांदे (Shoulders)" },
  "Biceps": { en: "Biceps", mr: "बायसेप्स (Biceps)" },
  "Triceps": { en: "Triceps", mr: "ट्रायसेप्स (Triceps)" },
  "Legs (Quads)": { en: "Legs (Quads)", mr: "क्वाड्स (Quads)" },
  "Legs (Hamstrings)": { en: "Legs (Hamstrings)", mr: "हॅमस्ट्रिंग्स (Hamstrings)" },
  "Legs (Calves)": { en: "Legs (Calves)", mr: "पोटऱ्या (Calves)" },
  "Glutes": { en: "Glutes", mr: "ग्लूट्स (Glutes)" },
  "Core": { en: "Core", mr: "पोट/कंबर (Core)" },
  "Cardio": { en: "Cardio", mr: "कार्डिओ (Cardio)" },
  "Mobility": { en: "Mobility", mr: "मोबिलिटी (Mobility)" }
};

let currentLang = localStorage.getItem('nsc_lang') || 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'mr' : 'en';
  localStorage.setItem('nsc_lang', currentLang);
  applyLanguage();
  renderMuscleGrid();
  renderEquipmentCatTabs();
  renderEquipmentGrid();
  renderWarmupSection();
  renderExercises();
  if (bodyMapVisible) {
    if (zoomedMuscleGroup) {
      showZoomedMuscle(zoomedMuscleGroup);
    } else {
      renderScientificBodyMap();
    }
  }
}

function applyLanguage() {
  const t = translations[currentLang];
  const langBadge = document.getElementById('langBadge');
  const langLabel = document.getElementById('langLabel');
  if (langBadge) langBadge.textContent = currentLang === 'en' ? 'मराठी' : 'English';
  if (langLabel) langLabel.textContent = currentLang === 'en' ? 'English' : 'मराठी';

  const subhead = document.getElementById('headerSubhead');
  if (subhead) subhead.textContent = t.headerSubhead;

  const tabMuscles = document.getElementById('tabMusclesText');
  if (tabMuscles) tabMuscles.textContent = t.tabMuscles;

  const tabEquip = document.getElementById('tabEquipmentText');
  if (tabEquip) tabEquip.textContent = t.tabEquipment;

  const tabWarmup = document.getElementById('tabWarmupText');
  if (tabWarmup) tabWarmup.textContent = t.tabWarmup;

  const searchInput = document.getElementById('exerciseSearch');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  const bodyMapToggle = document.getElementById('bodyMapToggleText');
  if (bodyMapToggle) bodyMapToggle.textContent = bodyMapVisible ? t.hideBodyMap : t.showBodyMap;

  const bodyMapLbl = document.getElementById('bodyMapLabel');
  if (bodyMapLbl) bodyMapLbl.textContent = t.bodyMapLabel;

  const bodyViewHnt = document.getElementById('bodyViewHint');
  if (bodyViewHnt) bodyViewHnt.textContent = t.bodyViewHint;

  const zoomBack = document.getElementById('zoomBackText');
  if (zoomBack) zoomBack.textContent = t.zoomBackText;

  const muscleSecLbl = document.getElementById('muscleSectionLabel');
  if (muscleSecLbl) muscleSecLbl.textContent = t.muscleSectionLabel;

  const equipSecLbl = document.getElementById('equipmentSectionLabel');
  if (equipSecLbl) equipSecLbl.textContent = t.equipmentSectionLabel;

  const equipSub = document.getElementById('equipmentSubhead');
  if (equipSub) equipSub.textContent = t.equipmentSubhead;

  const warmupSecLbl = document.getElementById('warmupSectionLabel');
  if (warmupSecLbl) warmupSecLbl.textContent = t.warmupSectionLabel;

  const warmupSub = document.getElementById('warmupSubhead');
  if (warmupSub) warmupSub.textContent = t.warmupSubhead;

  const filterPfx = document.getElementById('activeFilterPrefix');
  if (filterPfx) filterPfx.textContent = t.activeFilterPrefix;

  const rstBtn = document.getElementById('resetFilterBtn');
  if (rstBtn) {
    rstBtn.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      <span>${t.clearFilterBtn}</span>
    `;
  }

  const printQrBtn = document.getElementById('printQrBtnLabel');
  if (printQrBtn) printQrBtn.textContent = t.printQrBtnLabel;

  const qrModalTitle = document.getElementById('qrModalTitle');
  if (qrModalTitle) qrModalTitle.textContent = t.qrModalTitle;

  const qrModalSubhead = document.getElementById('qrModalSubhead');
  if (qrModalSubhead) qrModalSubhead.textContent = t.qrModalSubhead;

  const qrPrintNowLabel = document.getElementById('qrPrintNowLabel');
  if (qrPrintNowLabel) qrPrintNowLabel.textContent = t.qrPrintNowLabel;

  const mobM = document.getElementById('mobMusclesLabel');
  if (mobM) mobM.textContent = t.musclesTabMob;
  const mobE = document.getElementById('mobEquipLabel');
  if (mobE) mobE.textContent = t.equipTabMob;
  const mobW = document.getElementById('mobWarmupLabel');
  if (mobW) mobW.textContent = t.warmupTabMob;
  const mobB = document.getElementById('mobBodyLabel');
  if (mobB) mobB.textContent = t.bodyTabMob;

  const themeLabel = document.getElementById('themeLabel');
  if (themeLabel) {
    themeLabel.textContent = currentTheme === 'dark' ? t.lightMode : t.darkMode;
  }
}

// ─── THEME SWITCHER (DARK / LIGHT MODE WITH SVG ICONS) ────────────────────────
let currentTheme = localStorage.getItem('nsc_theme') || 'dark';

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('nsc_theme', theme);
  const icon = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');
  const t = translations[currentLang];
  
  if (icon) {
    icon.innerHTML = theme === 'dark' 
      ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
      : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
  if (label) label.textContent = theme === 'dark' ? t.lightMode : t.darkMode;
}

function toggleTheme() {
  const next = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

// ─── SIMPLE LAYMAN HOTSPOTS (NO LATIN CONFUSION) ──────────────────────────────
const anteriorHotspots = [
  {
    group: "Chest",
    x: 50,
    y: 25,
    label: "Chest",
    descEn: "Pushes weight away and brings arms together.",
    descMr: "छाती: वजन पुढे ढकलणे आणि आकुंचन."
  },
  {
    group: "Shoulders",
    x: 35,
    y: 22,
    label: "Front Shoulder",
    descEn: "Lifts and presses arms upward overhead.",
    descMr: "पुढील खांदा: हात वर उचलणे."
  },
  {
    group: "Shoulders",
    x: 65,
    y: 22,
    label: "Front Shoulder",
    descEn: "Lifts and presses arms upward overhead.",
    descMr: "पुढील खांदा: हात वर उचलणे."
  },
  {
    group: "Biceps",
    x: 32,
    y: 35,
    label: "Biceps",
    descEn: "Bends elbow and curls weight upward.",
    descMr: "बायसेप्स: कोपर वाकवून वजन वर उचलणे."
  },
  {
    group: "Biceps",
    x: 68,
    y: 35,
    label: "Biceps",
    descEn: "Bends elbow and curls weight upward.",
    descMr: "बायसेप्स: कोपर वाकवून वजन वर उचलणे."
  },
  {
    group: "Core",
    x: 50,
    y: 38,
    label: "Abs & Core",
    descEn: "Protects spine and stabilizes torso during all lifts.",
    descMr: "पोट व कोअर: कंबर तोलणे व पोटाचे स्नायू."
  },
  {
    group: "Legs (Quads)",
    x: 43,
    y: 62,
    label: "Quads (Thigh)",
    descEn: "Straightens knee to stand, squat, and jump.",
    descMr: "पुढील मांडी (Quads): गुडघा सरळ करणे व स्क्वॉट करणे."
  },
  {
    group: "Legs (Quads)",
    x: 57,
    y: 62,
    label: "Quads (Thigh)",
    descEn: "Straightens knee to stand, squat, and jump.",
    descMr: "पुढील मांडी (Quads): गुडघा सरळ करणे व स्क्वॉट करणे."
  },
  {
    group: "Legs (Calves)",
    x: 43,
    y: 82,
    label: "Calves",
    descEn: "Raises heels and pushes off the floor.",
    descMr: "पोटऱ्या: टाचा वर उचलणे व पायाला ताकद देणे."
  },
  {
    group: "Legs (Calves)",
    x: 57,
    y: 82,
    label: "Calves",
    descEn: "Raises heels and pushes off the floor.",
    descMr: "पोटऱ्या: टाचा वर उचलणे व पायाला ताकद देणे."
  }
];

const posteriorHotspots = [
  {
    group: "Back",
    x: 50,
    y: 20,
    label: "Upper Back",
    descEn: "Pulls shoulders back and supports strong posture.",
    descMr: "वरची पाठ व खांदे मागे घेणे."
  },
  {
    group: "Back",
    x: 50,
    y: 32,
    label: "Lats (Back)",
    descEn: "Pulls weights down and widens your back.",
    descMr: "लॅट्स: वजन खाली ओढणे व पाठीला रुंदी देणे."
  },
  {
    group: "Shoulders",
    x: 34,
    y: 23,
    label: "Rear Shoulder",
    descEn: "Pulls arms backwards for balanced 3D shoulders.",
    descMr: "मागील खांदे (Rear Delts): हात मागे खेचणे."
  },
  {
    group: "Shoulders",
    x: 66,
    y: 23,
    label: "Rear Shoulder",
    descEn: "Pulls arms backwards for balanced 3D shoulders.",
    descMr: "मागील खांदे (Rear Delts): हात मागे खेचणे."
  },
  {
    group: "Triceps",
    x: 31,
    y: 35,
    label: "Triceps",
    descEn: "Straightens arm when pushing. Makes up 60% of arm size!",
    descMr: "ट्रायसेप्स: हात पूर्ण सरळ करणे व वजन ढकलणे."
  },
  {
    group: "Triceps",
    x: 69,
    y: 35,
    label: "Triceps",
    descEn: "Straightens arm when pushing. Makes up 60% of arm size!",
    descMr: "ट्रायसेप्स: हात पूर्ण सरळ करणे व वजन ढकलणे."
  },
  {
    group: "Glutes",
    x: 50,
    y: 49,
    label: "Glutes (Hips)",
    descEn: "Drives hips forward for standing, sprinting, and lifting.",
    descMr: "नितंब (Glutes): मांड्या मागे ढकलणे व उठणे."
  },
  {
    group: "Legs (Hamstrings)",
    x: 43,
    y: 64,
    label: "Hamstrings",
    descEn: "Bends knee and pulls legs backwards.",
    descMr: "मागील मांडी (Hamstrings): गुडघा वाकवणे व धावणे."
  },
  {
    group: "Legs (Hamstrings)",
    x: 57,
    y: 64,
    label: "Hamstrings",
    descEn: "Bends knee and pulls legs backwards.",
    descMr: "मागील मांडी (Hamstrings): गुडघा वाकवणे व धावणे."
  },
  {
    group: "Legs (Calves)",
    x: 43,
    y: 82,
    label: "Calves",
    descEn: "Raises heels and powers your steps and jumps.",
    descMr: "पोटऱ्या: पायाची ताकद, चालणे व उडी मारणे."
  },
  {
    group: "Legs (Calves)",
    x: 57,
    y: 82,
    label: "Calves",
    descEn: "Raises heels and powers your steps and jumps.",
    descMr: "पोटऱ्या: पायाची ताकद, चालणे व उडी मारणे."
  }
];

// ─── DEDICATED CLOSE-UP MUSCLE ATLAS DATA ─────────────────────────────────────
const muscleCloseups = {
  "Chest": {
    nameEn: "Chest (Pectorals)",
    nameMr: "छाती (Chest)",
    image: "assets/muscle_chest.jpg",
    simpleRoleEn: "Pushes weights away from your chest and hugs your arms together.",
    simpleRoleMr: "वजन पुढे ढकलणे आणि दोन्ही हात छातीजवळ एकत्र आणणे.",
    laymanTipEn: "Key movements: Flat Barbell Bench Press, Incline Dumbbell Press, Cable Flys, and Dips.",
    laymanTipMr: "मुख्य व्यायाम: बेंच प्रेस, इनक्लाइन डंबेल प्रेस, केबल फ्लाय आणि डिप्स.",
    targetHeadsEn: "Upper Chest (Clavicular) · Mid & Lower Chest (Sternocostal)",
    targetHeadsMr: "वरची छाती · मधली व खालची छाती"
  },
  "Triceps": {
    nameEn: "Triceps (Back of Arm)",
    nameMr: "ट्रायसेप्स (Triceps)",
    image: "assets/muscle_triceps.jpg",
    simpleRoleEn: "Straightens your elbow when pushing weights. Makes up 60% of your total arm thickness!",
    simpleRoleMr: "हात पूर्ण सरळ करणे व वजन ढकलणे. हाताचा ६०% आकार ट्रायसेप्समुळे असतो!",
    laymanTipEn: "Key movements: Cable Pushdowns, Skull Crushers, Overhead Dumbbell Extension, and Dips.",
    laymanTipMr: "मुख्य व्यायाम: केबल पुशडाऊन, स्कल क्रशर, ओव्हरहेड एक्स्टेंशन आणि डिप्स.",
    targetHeadsEn: "Long Head (Back fullness) · Lateral Head (Outer horseshoe) · Medial Head (Elbow stability)",
    targetHeadsMr: "लॉंग हेड · लॅटरल हेड (बाहेरचा हॉर्सशू आकार) · मीडिअल हेड"
  },
  "Biceps": {
    nameEn: "Biceps (Front of Arm)",
    nameMr: "बायसेप्स (Biceps)",
    image: "assets/muscle_biceps.jpg",
    simpleRoleEn: "Bends your elbow and pulls weight up toward your shoulders.",
    simpleRoleMr: "हात कोपऱ्यातून वाकवून वजन वर उचलणे व पंजा फिरवणे.",
    laymanTipEn: "Key movements: Standing Barbell Curls, Dumbbell Hammer Curls, Preacher Curls, and Chin-Ups.",
    laymanTipMr: "मुख्य व्यायाम: बार्बेल कर्ल, डंबेल हॅमर कर्ल, प्रीचर कर्ल आणि चिन-अप्स.",
    targetHeadsEn: "Long Head (Peak) · Short Head (Inner Thickness) · Brachialis",
    targetHeadsMr: "लॉंग हेड (पीक) · शॉर्ट हेड (आतील जाडी) · ब्रेकियालिस"
  },
  "Back": {
    nameEn: "Back (Lats & Upper Back)",
    nameMr: "पाठ व लॅट्स (Back)",
    image: "assets/muscle_back.jpg",
    simpleRoleEn: "Pulls weights toward your body, creates a wide athletic V-taper, and reinforces upright posture.",
    simpleRoleMr: "वजन आपल्याकडे ओढणे, पाठीला रुंदी देणे आणि शरीर ताठ ठेवणे.",
    laymanTipEn: "Key movements: Lat Pulldowns, Seated Cable Rows, Barbell Bent-Over Rows, and Deadlifts.",
    laymanTipMr: "मुख्य व्यायाम: लॅट पुलडाऊन, सीटेड केबल रो, बार्बेल रो आणि डेडलिफ्ट.",
    targetHeadsEn: "Latissimus Dorsi (Lats) · Trapezius (Traps) · Rhomboids · Lower Back",
    targetHeadsMr: "लॅट्स · ट्रॅप्स · र्हॉम्बॉइड्स · लोअर बॅक"
  },
  "Shoulders": {
    nameEn: "Shoulders (Deltoids)",
    nameMr: "खांदे (Shoulders)",
    image: "assets/muscle_shoulders.jpg",
    simpleRoleEn: "Lifts and rotates your arms overhead, out to the sides, and backwards for 3D shoulder shape.",
    simpleRoleMr: "हात वर उचलणे, बाजूंना पसरवणे आणि गोल मजबूत खांदे बनवणे.",
    laymanTipEn: "Key movements: Overhead Military Press, Dumbbell Lateral Raises, Face Pulls, and Reverse Flys.",
    laymanTipMr: "मुख्य व्यायाम: ओव्हरहेड प्रेस, लॅटरल रेज, फेस पुल आणि रिव्हर्स फ्लाय.",
    targetHeadsEn: "Front Deltoid (Pressing) · Side Deltoid (Width) · Rear Deltoid (Posture & balance)",
    targetHeadsMr: "पुढील खांदे · बाजूचे खांदे (रुंदी) · मागील खांदे"
  },
  "Legs (Quads)": {
    nameEn: "Quads (Front Thigh)",
    nameMr: "क्वाड्स (Front Thigh)",
    image: "assets/muscle_quads.jpg",
    simpleRoleEn: "Straightens your knee to stand up, squat, jump, and walk upstairs with strength.",
    simpleRoleMr: "गुडघा सरळ करणे, उठणे, स्क्वॉट करणे आणि ताकदीने पायऱ्या चढणे.",
    laymanTipEn: "Key movements: Barbell Back Squats, Leg Press Machine, Leg Extensions, and Lunges.",
    laymanTipMr: "मुख्य व्यायाम: स्क्वॉट, लेग प्रेस मशीन, लेग एक्स्टेंशन आणि लाँजेस.",
    targetHeadsEn: "Rectus Femoris · Vastus Lateralis (Outer sweep) · Vastus Medialis (Teardrop above knee)",
    targetHeadsMr: "चार मुख्य स्नायू (क्वॉड्रिसेप्स फिमोरिस)"
  },
  "Legs (Hamstrings)": {
    nameEn: "Hamstrings (Back Thigh)",
    nameMr: "हॅमस्ट्रिंग्स (Back Thigh)",
    image: "assets/muscle_hamstrings.jpg",
    simpleRoleEn: "Bends your knee and pulls your legs backwards when walking, running, or deadlifting.",
    simpleRoleMr: "गुडघा वाकवणे, पाय मागे खेचणे आणि धावताना वेग देणे.",
    laymanTipEn: "Key movements: Lying Leg Curls, Romanian Deadlifts (RDLs), and Glute-Ham Raises.",
    laymanTipMr: "मुख्य व्यायाम: लेग कर्ल, रोमानियन डेडलिफ्ट आणि ग्लूट-हॅम रेज.",
    targetHeadsEn: "Biceps Femoris · Semitendinosus · Semimembranosus",
    targetHeadsMr: "बायसेप्स फेमोरिस · सेमीटेंडिनोसस"
  },
  "Legs (Calves)": {
    nameEn: "Calves (Lower Leg)",
    nameMr: "पोटऱ्या (Calves)",
    image: "assets/muscle_calves.jpg",
    simpleRoleEn: "Raises your heels and points your toes. Essential for ankle stability and explosive jumps.",
    simpleRoleMr: "टाचा वर उचलणे, चालताना पायाला ताकद देणे व उडी मारणे.",
    laymanTipEn: "Key movements: Standing Calf Raises, Seated Calf Machine, and Donkey Calf Raises.",
    laymanTipMr: "मुख्य व्यायाम: स्टँडिंग काफ रेज, सीटेड काफ मशीन.",
    targetHeadsEn: "Gastrocnemius (Upper diamond muscle) · Soleus (Deep endurance muscle)",
    targetHeadsMr: "गॅस्ट्रोक्नेमियस · सोलियस"
  },
  "Glutes": {
    nameEn: "Glutes (Hips & Butt)",
    nameMr: "ग्लूट्स (Glutes)",
    image: "assets/muscle_glutes.jpg",
    simpleRoleEn: "The strongest muscle group in your body! Drives hips forward when walking, jumping, and lifting.",
    simpleRoleMr: "शरीरातील सर्वात मजबूत स्नायू! उठणे आणि वजन उचलण्यासाठी मुख्य शक्ती.",
    laymanTipEn: "Key movements: Barbell Hip Thrusts, Bulgarian Split Squats, Sumo Deadlifts, and Cable Kickbacks.",
    laymanTipMr: "मुख्य व्यायाम: हिप थ्रस्ट, बल्गेरियन स्प्लिट स्क्वॉट, आणि केबल किक-बॅक.",
    targetHeadsEn: "Gluteus Maximus (Power & size) · Gluteus Medius & Minimus (Pelvic stability)",
    targetHeadsMr: "ग्लूटियस मॅक्सिमस · ग्लूटियस मीडिअस"
  },
  "Core": {
    nameEn: "Abs & Core",
    nameMr: "पोट व कंबर (Abs & Core)",
    image: "assets/muscle_core.jpg",
    simpleRoleEn: "Protects your lower back, stabilizes your spine, and helps you sit up and twist with power.",
    simpleRoleMr: "कंबर सुरक्षित ठेवणे, शरीर तोलणे आणि पोटाचे सिक्स-पॅक स्नायू.",
    laymanTipEn: "Key movements: Hanging Leg Raises, Planks, Cable Woodchoppers, and Ab Crunch Machine.",
    laymanTipMr: "मुख्य व्यायाम: हँगिंग लेग रेज, प्लँक, आणि केबल क्रंच.",
    targetHeadsEn: "Six-Pack (Rectus Abdominis) · Side Abs (Obliques) · Deep Core (Transverse Abdominis)",
    targetHeadsMr: "सिक्स-पॅक स्नायू · बाजूचे ऑब्लिक्स · डीप कोअर"
  }
};

let zoomedMuscleGroup = null;

function toggleBodyMap() {
  bodyMapVisible = !bodyMapVisible;
  const wrapper = document.getElementById('bodyMapWrapper');
  const toggleBtn = document.getElementById('bodyMapToggleBtn');
  const arrow = document.getElementById('bodyMapArrow');
  const text = document.getElementById('bodyMapToggleText');
  const t = translations[currentLang];

  if (wrapper) wrapper.style.display = bodyMapVisible ? 'block' : 'none';
  if (toggleBtn) toggleBtn.setAttribute('aria-expanded', bodyMapVisible);
  if (arrow) arrow.style.transform = bodyMapVisible ? 'rotate(180deg)' : 'rotate(0deg)';
  if (text) text.textContent = bodyMapVisible ? t.hideBodyMap : t.showBodyMap;

  if (bodyMapVisible) {
    if (activeGroup !== 'All' && muscleCloseups[activeGroup]) {
      showZoomedMuscle(activeGroup);
    } else {
      resetBodyMapZoom();
      renderScientificBodyMap();
    }
  }
}

function handleHotspotClick(group) {
  activeGroup = group;
  activeEquipmentId = null;
  searchQuery = "";
  const searchInput = document.getElementById('exerciseSearch');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) clearBtn.style.display = 'none';

  renderMuscleGrid();
  renderEquipmentGrid();
  renderExercises();
  showZoomedMuscle(group);
}

function showZoomedMuscle(group) {
  const data = muscleCloseups[group];
  const duo = document.getElementById('bodyMapDuo');
  const zoomView = document.getElementById('zoomedMuscleView');
  const backBtn = document.getElementById('zoomBackBtn');
  const t = translations[currentLang];

  if (!data || !zoomView) {
    resetBodyMapZoom();
    return;
  }

  zoomedMuscleGroup = group;
  if (duo) duo.style.display = 'none';
  zoomView.style.display = 'grid';
  if (backBtn) backBtn.style.display = 'inline-flex';

  const title = currentLang === 'mr' ? data.nameMr : data.nameEn;
  const role = currentLang === 'mr' ? data.simpleRoleMr : data.simpleRoleEn;
  const tips = currentLang === 'mr' ? data.laymanTipMr : data.laymanTipEn;
  const parts = currentLang === 'mr' ? data.targetHeadsMr : data.targetHeadsEn;
  const matchCount = exercises.filter(e => e.group === group).length;

  zoomView.innerHTML = `
    <div class="zoom-img-card">
      <div class="zoom-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        <span>${t.focusedViewBadge}</span>
      </div>
      <img src="${data.image}" alt="${title} anatomical illustration" loading="eager">
    </div>

    <div class="zoom-content">
      <div class="zoom-header">
        <div class="zoom-tag-row">
          <span class="zoom-tag">NSC Anatomy Focus</span>
          <span class="pill-badge">${matchCount} exercises</span>
        </div>
        <h2 class="zoom-title">${title}</h2>
      </div>

      <div class="zoom-description-box">
        <span class="zoom-role-heading">${t.whatItDoes}</span>
        <p class="zoom-role-text">${role}</p>
      </div>

      <div class="zoom-details-grid">
        <div class="zoom-detail-item">
          <span class="zoom-detail-lbl">${t.muscleParts}</span>
          <span class="zoom-detail-val">${parts}</span>
        </div>
        <div class="zoom-detail-item">
          <span class="zoom-detail-lbl">${t.keyMovements}</span>
          <span class="zoom-detail-val">${tips}</span>
        </div>
      </div>

      <div class="zoom-actions">
        <button class="zoom-view-exercises-btn" onclick="scrollToExercises()">
          <span>${t.viewExercisesText} (${matchCount})</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
        </button>
        <button class="zoom-return-btn" onclick="resetBodyMapZoom()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <span>${t.zoomBackText}</span>
        </button>
      </div>
    </div>
  `;
}

function resetBodyMapZoom() {
  zoomedMuscleGroup = null;
  const duo = document.getElementById('bodyMapDuo');
  const zoomView = document.getElementById('zoomedMuscleView');
  const backBtn = document.getElementById('zoomBackBtn');

  if (duo) duo.style.display = 'grid';
  if (zoomView) zoomView.style.display = 'none';
  if (backBtn) backBtn.style.display = 'none';
  updateBodyMapHighlights();
}

function scrollToExercises() {
  const target = document.getElementById('activeFilterBar') || document.getElementById('exercisesHeader');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderHotspotElements(hotspots) {
  return hotspots.map(spot => {
    const matchingCount = exercises.filter(e => e.group === spot.group).length;
    const actionText = currentLang === 'mr' ? spot.descMr : spot.descEn;
    const isSelected = activeGroup === spot.group;

    return `
      <button class="anatomy-hotspot ${isSelected ? 'active' : ''}" 
              style="left: ${spot.x}%; top: ${spot.y}%;" 
              data-group="${spot.group}"
              onclick="handleHotspotClick('${spot.group.replace(/'/g, "\\'")}')"
              aria-label="Filter and zoom ${spot.label}">
        <span class="hotspot-dot"></span>
        <span class="hotspot-label">${spot.label}</span>
        
        <div class="hotspot-tooltip" role="tooltip">
          <div style="font-weight:800; font-size:12.5px; color:var(--ink);">${spot.label}</div>
          <div class="tooltip-action" style="margin-top:3px;">${actionText}</div>
          <div class="tooltip-count">${matchingCount} exercises at NSC · Tap to zoom</div>
        </div>
      </button>
    `;
  }).join('');
}

function renderScientificBodyMap() {
  const duo = document.getElementById('bodyMapDuo');
  if (!duo) return;

  duo.innerHTML = `
    <!-- ANTERIOR (FRONT) MEDICAL VIEW -->
    <div class="medical-plate-card">
      <div class="medical-plate-title">
        <span>Anterior Muscular System (Front)</span>
      </div>
      <div class="medical-image-wrapper">
        <img src="assets/anatomy_anterior.jpg" class="medical-plate-img" alt="Anterior muscular system plate" loading="lazy">
        ${renderHotspotElements(anteriorHotspots)}
      </div>
    </div>

    <!-- POSTERIOR (BACK) MEDICAL VIEW -->
    <div class="medical-plate-card">
      <div class="medical-plate-title">
        <span>Posterior Muscular System (Back)</span>
      </div>
      <div class="medical-image-wrapper">
        <img src="assets/anatomy_posterior.jpg" class="medical-plate-img" alt="Posterior muscular system plate" loading="lazy">
        ${renderHotspotElements(posteriorHotspots)}
      </div>
    </div>
  `;
}

function updateBodyMapHighlights() {
  const hotspots = document.querySelectorAll('.anatomy-hotspot');
  hotspots.forEach(h => {
    if (activeGroup !== 'All' && h.getAttribute('data-group') === activeGroup) {
      h.classList.add('active');
    } else {
      h.classList.remove('active');
    }
  });
}

// ─── VIEW MODE & ROUTING ──────────────────────────────────────────────────────
function ytUrl(name) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(name + ' tutorial proper form')}`;
}

function ytIcon() {
  return `<svg class="yt-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.57A3.01 3.01 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3.01 3.01 0 0 0 2.12 2.13C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.57A3.01 3.01 0 0 0 23.5 17.8C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/></svg>`;
}

function switchMode(mode) {
  activeMode = mode;
  const tabMuscles = document.getElementById('tabMuscles');
  const tabEquipment = document.getElementById('tabEquipment');
  const tabWarmup = document.getElementById('tabWarmup');
  const muscleSection = document.getElementById('muscleSection');
  const equipmentSection = document.getElementById('equipmentSection');
  const warmupSection = document.getElementById('warmupSection');
  const bodyMapControls = document.querySelector('.body-map-controls');
  const bodyMapWrapper = document.getElementById('bodyMapWrapper');
  const exercisesHeader = document.getElementById('exercisesHeader');
  const exerciseGrid = document.getElementById('exerciseGrid');
  const activeFilterBar = document.getElementById('activeFilterBar');
  const mobM = document.getElementById('mobNavMuscles');
  const mobE = document.getElementById('mobNavEquip');
  const mobW = document.getElementById('mobNavWarmup');

  // Reset tab active states
  [tabMuscles, tabEquipment, tabWarmup].forEach(tab => {
    if (tab) {
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
    }
  });
  [mobM, mobE, mobW].forEach(nav => {
    if (nav) nav.classList.remove('active');
  });

  if (mode === 'muscles') {
    if (tabMuscles) { tabMuscles.classList.add('active'); tabMuscles.setAttribute('aria-selected', 'true'); }
    if (mobM) mobM.classList.add('active');
    if (muscleSection) muscleSection.style.display = 'block';
    if (equipmentSection) equipmentSection.style.display = 'none';
    if (warmupSection) warmupSection.style.display = 'none';
    if (bodyMapControls) bodyMapControls.style.display = 'flex';
    if (exercisesHeader) exercisesHeader.style.display = 'flex';
    if (exerciseGrid) exerciseGrid.style.display = 'grid';
    renderMuscleGrid();
  } else if (mode === 'equipment') {
    if (tabEquipment) { tabEquipment.classList.add('active'); tabEquipment.setAttribute('aria-selected', 'true'); }
    if (mobE) mobE.classList.add('active');
    if (muscleSection) muscleSection.style.display = 'none';
    if (equipmentSection) equipmentSection.style.display = 'block';
    if (warmupSection) warmupSection.style.display = 'none';
    if (bodyMapControls) bodyMapControls.style.display = 'flex';
    if (exercisesHeader) exercisesHeader.style.display = 'flex';
    if (exerciseGrid) exerciseGrid.style.display = 'grid';
    renderEquipmentCatTabs();
    renderEquipmentGrid();
  } else if (mode === 'warmup') {
    if (tabWarmup) { tabWarmup.classList.add('active'); tabWarmup.setAttribute('aria-selected', 'true'); }
    if (mobW) mobW.classList.add('active');
    if (muscleSection) muscleSection.style.display = 'none';
    if (equipmentSection) equipmentSection.style.display = 'none';
    if (warmupSection) warmupSection.style.display = 'block';
    if (bodyMapControls) bodyMapControls.style.display = 'none';
    if (bodyMapWrapper) bodyMapWrapper.style.display = 'none';
    bodyMapVisible = false;
    if (exercisesHeader) exercisesHeader.style.display = 'none';
    if (exerciseGrid) exerciseGrid.style.display = 'none';
    if (activeFilterBar) activeFilterBar.style.display = 'none';
    renderWarmupSection();
  }
}

function renderMuscleGrid() {
  const grid = document.getElementById('muscleGrid');
  if (!grid) return;
  grid.innerHTML = groups.map(g => {
    const isTrans = muscleTranslations[g] && muscleTranslations[g][currentLang];
    const displayName = isTrans ? muscleTranslations[g][currentLang] : g;
    return `
      <button class="muscle-btn ${g === activeGroup && !activeEquipmentId && !searchQuery ? 'active' : ''}" onclick="setGroup('${g.replace(/'/g, "\\'")}')">
        <span>${displayName}</span>
      </button>
    `;
  }).join('');
}

function renderEquipmentCatTabs() {
  const container = document.getElementById('equipmentCatTabs');
  if (!container) return;
  container.innerHTML = equipmentCategories.map(cat => `
    <button class="eq-cat-btn ${cat === activeEquipmentCategory ? 'active' : ''}" onclick="setEquipmentCategory('${cat}')">
      ${cat}
    </button>
  `).join('');
}

function setEquipmentCategory(cat) {
  activeEquipmentCategory = cat;
  renderEquipmentCatTabs();
  renderEquipmentGrid();
}

function renderEquipmentGrid() {
  const grid = document.getElementById('equipmentGrid');
  if (!grid) return;

  const filtered = activeEquipmentCategory === 'All' 
    ? equipments 
    : equipments.filter(eq => eq.category === activeEquipmentCategory);

  grid.innerHTML = filtered.map(eq => {
    const matchingExercises = exercises.filter(eq.match);
    const count = matchingExercises.length;
    const isSelected = activeEquipmentId === eq.id;

    const t = translations[currentLang];
    return `
      <div class="equipment-card ${isSelected ? 'selected' : ''}" 
           role="button" 
           tabindex="0" 
           aria-pressed="${isSelected}"
           onclick="filterByEquipment('${eq.id}')"
           onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();filterByEquipment('${eq.id}');}">
        <div class="eq-card-top">
          <span class="eq-badge category">${eq.tag}</span>
          <span class="eq-count">${count} exercise${count !== 1 ? 's' : ''}</span>
        </div>
        <div class="eq-card-header">
          <div class="eq-station">${eq.station}</div>
          <div class="eq-title">${eq.name}</div>
        </div>
        <div class="eq-desc">${eq.desc}</div>
        <div class="eq-muscles">
          ${eq.muscles.map(m => `<span class="eq-muscle-tag">${m}</span>`).join('')}
        </div>
        <div class="eq-footer">
          <div class="eq-footer-left">
            <span class="eq-badge">${eq.category}</span>
            <button class="eq-qr-btn" type="button" onclick="event.stopPropagation(); openQrModal('${eq.id}')" title="Generate QR Sticker for this station" aria-label="QR Sticker">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <span>QR Sticker</span>
            </button>
          </div>
          <span class="eq-action-btn">${t.showExercises}</span>
        </div>
      </div>
    `;
  }).join('');
}

// ─── WARMUP & JOINT MOBILITY SECTION RENDERER ────────────────────────────────
function renderWarmupSection() {
  const container = document.getElementById('warmupSection');
  if (!container) return;
  renderWarmupCatTabs();
  renderWarmupGrid();
}

function renderWarmupCatTabs() {
  const container = document.getElementById('warmupCatTabs');
  if (!container) return;
  const t = translations[currentLang];
  const catNames = {
    "All": t.allProtocols,
    "Upper Body": t.upperBodyPrep,
    "Lower Body": t.lowerBodyPrep
  };
  container.innerHTML = warmupCategories.map(cat => `
    <button class="eq-cat-btn ${cat === activeWarmupCategory ? 'active' : ''}" onclick="setWarmupCategory('${cat}')">
      ${catNames[cat] || cat}
    </button>
  `).join('');
}

function setWarmupCategory(cat) {
  activeWarmupCategory = cat;
  renderWarmupCatTabs();
  renderWarmupGrid();
}

function renderWarmupGrid() {
  const grid = document.getElementById('warmupGrid');
  if (!grid) return;
  const t = translations[currentLang];

  const filtered = activeWarmupCategory === 'All'
    ? warmupProtocols
    : warmupProtocols.filter(p => p.category === activeWarmupCategory);

  grid.innerHTML = filtered.map(p => {
    const title = p.title[currentLang] || p.title.en;
    const joints = p.targetJoints[currentLang] || p.targetJoints.en;
    const ideal = p.idealBefore[currentLang] || p.idealBefore.en;

    return `
      <div class="warmup-card" id="warmup-${p.id}">
        <div class="warmup-card-header">
          <div class="warmup-card-title-row">
            <div class="warmup-title-wrap">
              <span class="warmup-badge category">${p.tag}</span>
              <h3 class="warmup-title">${title}</h3>
            </div>
            <div class="warmup-duration-pill">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>${p.duration}</span>
            </div>
          </div>
          <div class="warmup-meta">
            <div class="warmup-meta-item">
              <strong>${t.targetJointsLabel}</strong> <span>${joints}</span>
            </div>
            <div class="warmup-meta-item">
              <strong>${t.idealBeforeLabel}</strong> <span>${ideal}</span>
            </div>
          </div>
        </div>

        <div class="warmup-steps-list">
          ${p.steps.map(s => {
            const stepName = s.name[currentLang] || s.name.en;
            const stepCue = s.cue[currentLang] || s.cue.en;
            return `
              <div class="warmup-step-item">
                <div class="step-num">${s.num}</div>
                <div class="step-content">
                  <div class="step-head">
                    <span class="step-name">${stepName}</span>
                    <span class="step-dose">${s.dose}</span>
                  </div>
                  <p class="step-cue">${stepCue}</p>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="warmup-footer">
          <div class="warmup-links-label">${t.startThisWorkout}:</div>
          <div class="warmup-links-chips">
            ${p.linkedExercises.map(exName => `
              <button class="warmup-link-chip" type="button" onclick="jumpToExercise('${exName.replace(/'/g, "\\'")}')" title="Open ${exName}">
                <span>${exName}</span>
                <span class="link-arrow" aria-hidden="true">→</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterByEquipment(id) {
  activeEquipmentId = id;
  activeGroup = "All";
  searchQuery = "";
  const searchInput = document.getElementById('exerciseSearch');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) clearBtn.style.display = 'none';

  renderMuscleGrid();
  renderEquipmentGrid();
  renderExercises();
  updateBodyMapHighlights();

  const target = document.getElementById('activeFilterBar') || document.getElementById('exercisesHeader');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function clearActiveFilter() {
  activeEquipmentId = null;
  activeGroup = "All";
  searchQuery = "";
  const searchInput = document.getElementById('exerciseSearch');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) clearBtn.style.display = 'none';

  renderMuscleGrid();
  renderEquipmentGrid();
  renderExercises();
  updateBodyMapHighlights();
}

function handleSearch(val) {
  searchQuery = val.trim().toLowerCase();
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) {
    clearBtn.style.display = searchQuery ? 'block' : 'none';
  }
  if (searchQuery) {
    activeEquipmentId = null;
    activeGroup = "All";
    renderMuscleGrid();
    renderEquipmentGrid();
    updateBodyMapHighlights();
  }
  renderExercises();
}

function clearSearch() {
  const searchInput = document.getElementById('exerciseSearch');
  if (searchInput) searchInput.value = '';
  handleSearch('');
}

function formatEquipmentText(equipStr) {
  if (!equipStr) return '';
  const parts = equipStr.split(',').map(s => s.trim());
  return parts.map(p => {
    const match = equipments.find(eq => eq.match({ equipment: p, group: '' }));
    if (match) {
      return `<span class="ex-equipment-clickable" onclick="event.stopPropagation(); filterByEquipment('${match.id}')" title="View exercises on ${match.name}">${p}</span>`;
    }
    return p;
  }).join(', ');
}

function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) {
    const isExpanded = card.classList.toggle('expanded');
    card.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  }
}

function difficultyPips(diff) {
  const d = diff.toLowerCase();
  const count = d === 'beginner' ? 1 : d === 'intermediate' ? 2 : 3;
  return `
    <div class="diff-indicator" title="Difficulty: ${diff}">
      <span class="diff-bar ${count >= 1 ? 'active' : ''}"></span>
      <span class="diff-bar ${count >= 2 ? 'active' : ''}"></span>
      <span class="diff-bar ${count >= 3 ? 'active' : ''}"></span>
      <span class="diff-text">${diff}</span>
    </div>
  `;
}

function renderExercises() {
  const grid = document.getElementById('exerciseGrid');
  const label = document.getElementById('groupLabel');
  const badge = document.getElementById('countBadge');
  const filterBar = document.getElementById('activeFilterBar');
  const filterName = document.getElementById('activeFilterName');
  const filterCount = document.getElementById('activeFilterCount');
  const t = translations[currentLang];

  let filtered = exercises;
  let activeFilterTitle = '';

  if (searchQuery) {
    filtered = exercises.filter(e => 
      e.name.toLowerCase().includes(searchQuery) ||
      e.group.toLowerCase().includes(searchQuery) ||
      e.equipment.toLowerCase().includes(searchQuery) ||
      e.primary.toLowerCase().includes(searchQuery) ||
      (e.secondary && e.secondary.toLowerCase().includes(searchQuery))
    );
    activeFilterTitle = `Search: "${searchQuery}"`;
  } else if (activeEquipmentId) {
    const eq = equipments.find(e => e.id === activeEquipmentId);
    if (eq) {
      filtered = exercises.filter(eq.match);
      activeFilterTitle = `Equipment: ${eq.name}`;
    }
  } else if (activeGroup !== "All") {
    filtered = exercises.filter(e => e.group === activeGroup);
    activeFilterTitle = muscleTranslations[activeGroup] ? muscleTranslations[activeGroup][currentLang] : activeGroup;
  }

  // Update Header Label
  if (activeEquipmentId) {
    const eq = equipments.find(e => e.id === activeEquipmentId);
    label.innerHTML = `Equipment: <span>${eq ? eq.name : ''}</span>`;
  } else if (searchQuery) {
    label.innerHTML = `Results for <span>"${searchQuery}"</span>`;
  } else {
    const groupWord = activeGroup === "All" ? t.allExercises : (muscleTranslations[activeGroup] ? muscleTranslations[activeGroup][currentLang] : activeGroup);
    const parts = groupWord.split(' ');
    const first = parts.slice(0, -1).join(' ');
    const last = parts[parts.length - 1];
    label.innerHTML = first ? `${first} <span>${last}</span>` : `<span>${last}</span>`;
  }

  badge.textContent = `${filtered.length} exercise${filtered.length !== 1 ? 's' : ''}`;

  // Update Active Filter Bar
  if (filterBar) {
    if (activeEquipmentId || searchQuery) {
      filterBar.style.display = 'flex';
      filterName.textContent = activeFilterTitle;
      filterCount.textContent = `${filtered.length} exercise${filtered.length !== 1 ? 's' : ''}`;
    } else {
      filterBar.style.display = 'none';
    }
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results" role="status">
        <div class="no-results-title">${currentLang === 'mr' ? 'कोणतेही व्यायाम आढळले नाहीत' : 'No exercises found'}</div>
        <p class="no-results-desc">${currentLang === 'mr' ? 'कृपया वेगळा स्नायू गट किंवा मशीन निवडा, किंवा फिल्टर काढा.' : 'No exercises match the current selection. Try searching for a different muscle group, machine station, or clear your filters.'}</p>
        <button class="reset-filter-btn" onclick="clearActiveFilter()" style="display:inline-flex; margin-top: 14px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          <span>${t.allExercises}</span>
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((ex, i) => `
    <div class="exercise-card" 
         id="card-${i}" 
         role="button" 
         tabindex="0" 
         aria-expanded="false" 
         onclick="toggleCard('card-${i}')"
         onkeydown="if(event.key==='Enter'||event.key===' '){if(event.target===this||!event.target.closest('a, button')){event.preventDefault();toggleCard('card-${i}');}}">
      <div class="card-header">
        <div class="card-header-left">
          <div class="ex-name">${ex.name}</div>
          <div class="ex-meta-line">
            <span class="ex-meta-target">${ex.primary}</span>
            <span class="ex-meta-sep">/</span>
            <span class="ex-meta-group">${ex.group}</span>
          </div>
        </div>
        <div class="card-header-right">
          ${difficultyPips(ex.difficulty)}
          <span class="expand-icon" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </span>
        </div>
      </div>
      
      <div class="ex-equipment">
        <span class="station-label">Station:</span> ${formatEquipmentText(ex.equipment)}
      </div>
      
      <div class="ex-form">${ex.form}</div>
      
      <div class="ex-details" onclick="event.stopPropagation()">
        <!-- Machine Busy 1-Tap Alternatives -->
        <div class="ex-alternatives">
          <div class="alt-label-row">
            <span class="alt-label-icon">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
            </span>
            <span class="alt-title">${t.machineBusyTitle}</span>
          </div>
          <div class="alt-chips-container">
            ${getExerciseAlternatives(ex).map(alt => `
              <button class="alt-chip" type="button" onclick="jumpToExercise('${alt.replace(/'/g, "\\'")}')" title="Swap to ${alt}">
                <span class="alt-chip-name">${alt}</span>
                <span class="alt-chip-arrow" aria-hidden="true">→</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="ex-synergists">
          <strong>${t.secondaryMuscles}</strong> <span>${ex.secondary}</span>
        </div>
        <div class="ex-cues">
          <strong>${t.commonCues}</strong>
          <div class="cues-content">${ex.cues.replace(/\n/g, '<br/>')}</div>
        </div>
        <a class="yt-btn" href="${ex.video ? ex.video : ytUrl(ex.name)}" target="_blank" rel="noopener">
          <svg class="yt-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          <span>${t.watchTutorial}</span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </div>
    </div>
  `).join('');
}

function jumpToExercise(targetName) {
  const match = exercises.find(e => e.name.toLowerCase() === targetName.toLowerCase());
  if (!match) return;

  if (activeMode !== 'muscles') {
    switchMode('muscles');
  }

  if (activeEquipmentId) {
    activeEquipmentId = null;
  }
  if (activeGroup !== 'All' && match.group !== activeGroup) {
    activeGroup = 'All';
    renderMuscleGrid();
    updateBodyMapHighlights();
  }
  if (searchQuery) {
    clearSearch();
  } else {
    renderExercises();
  }

  setTimeout(() => {
    const allCards = document.querySelectorAll('.exercise-card');
    let targetCard = null;
    allCards.forEach(card => {
      const nameEl = card.querySelector('.ex-name');
      if (nameEl && nameEl.textContent.trim().toLowerCase() === targetName.toLowerCase()) {
        targetCard = card;
      }
    });

    if (targetCard) {
      targetCard.classList.add('expanded');
      targetCard.setAttribute('aria-expanded', 'true');
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      targetCard.classList.add('swap-highlight');
      setTimeout(() => {
        targetCard.classList.remove('swap-highlight');
      }, 2500);
    }
  }, 100);
}

function setGroup(g) {
  activeGroup = g;
  activeEquipmentId = null;
  searchQuery = "";
  const searchInput = document.getElementById('exerciseSearch');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) clearBtn.style.display = 'none';

  renderMuscleGrid();
  renderEquipmentGrid();
  renderExercises();
  updateBodyMapHighlights();

  if (bodyMapVisible) {
    if (g !== 'All' && muscleCloseups[g]) {
      showZoomedMuscle(g);
    } else {
      resetBodyMapZoom();
    }
  }

  const target = document.getElementById('exercisesHeader');
  if (target && !bodyMapVisible) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ─── GYM FLOOR QR CODE STICKERS MODAL ───────────────────────────────────────
function openQrModal(targetId) {
  const modal = document.getElementById('qrModal');
  const body = document.getElementById('qrModalBody');
  if (!modal || !body) return;

  const t = translations[currentLang];
  let itemsToRender = [];

  if (!targetId || targetId === 'all') {
    itemsToRender = equipments;
  } else {
    const eq = equipments.find(e => e.id === targetId);
    if (eq) itemsToRender = [eq];
  }

  body.innerHTML = `
    <div class="qr-filter-bar no-print">
      <div class="qr-filter-left">
        <label for="qrMachineSelect" class="qr-filter-label">Displaying Station:</label>
        <select id="qrMachineSelect" class="qr-machine-select" onchange="openQrModal(this.value)">
          <option value="all" ${targetId === 'all' || !targetId ? 'selected' : ''}>All 25 Stations (Printable A4 Sheet)</option>
          ${equipments.map(eq => `<option value="${eq.id}" ${targetId === eq.id ? 'selected' : ''}>${eq.station}: ${eq.name}</option>`).join('')}
        </select>
      </div>
      <div class="qr-filter-count">
        ${itemsToRender.length} sticker${itemsToRender.length !== 1 ? 's' : ''} ready to print
      </div>
    </div>
    <div class="qr-stickers-grid">
      ${itemsToRender.map(eq => {
        const url = `https://nscp-exercise-list.vercel.app/?machine=${eq.id}`;
        const qrSvg = (typeof QRCode !== 'undefined' && QRCode.generateSVG) 
          ? QRCode.generateSVG(url, 140, 1) 
          : `<div class="qr-fallback">QR Code</div>`;
        const musclesList = eq.muscles.join(' · ');

        return `
          <div class="qr-sticker-card" id="sticker-${eq.id}">
            <div class="sticker-cut-border">
              <div class="sticker-brand-header">
                <div class="sticker-brand-mark">
                  <img src="assets/nsc_logo_transparent.png" alt="Netaji Sports Club" class="sticker-brand-logo">
                </div>
                <div class="sticker-brand-text">
                  <div class="sticker-gym-name">NETAJI SPORTS CLUB</div>
                  <div class="sticker-gym-sub">Pandharpur · 90 11 44 5000</div>
                </div>
              </div>

              <div class="sticker-qr-container">
                <div class="sticker-qr-box">
                  ${qrSvg}
                </div>
              </div>

              <div class="sticker-station-info">
                <div class="sticker-station-badge">${eq.station}</div>
                <div class="sticker-station-name">${eq.name}</div>
                <div class="sticker-muscles">Target: ${musclesList}</div>
              </div>

              <div class="sticker-footer-info">
                <div class="sticker-instruction">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                  <span>${t.qrScanHint}</span>
                </div>
                <div class="sticker-url-text">nscp-exercise-list.vercel.app/?machine=${eq.id}</div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeQrModal() {
  const modal = document.getElementById('qrModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// ─── URL QUERY DEEP-LINKING (QR CODES) ─────────────────────────────────────────
function handleUrlParams() {
  const params = new URLSearchParams(window.location.search);
  
  if (params.has('theme')) {
    applyTheme(params.get('theme'));
  }
  if (params.has('lang')) {
    currentLang = params.get('lang') === 'mr' ? 'mr' : 'en';
    localStorage.setItem('nsc_lang', currentLang);
    applyLanguage();
  }
  if (params.has('machine') || params.has('equipment')) {
    const machineId = params.get('machine') || params.get('equipment');
    const eq = equipments.find(e => e.id === machineId);
    if (eq) {
      switchMode('equipment');
      filterByEquipment(machineId);
      return;
    }
  }
  if (params.has('warmup')) {
    switchMode('warmup');
    const wpId = params.get('warmup');
    if (wpId) {
      setTimeout(() => {
        const card = document.getElementById(`warmup-${wpId}`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('swap-highlight');
          setTimeout(() => card.classList.remove('swap-highlight'), 2500);
        }
      }, 150);
    }
    return;
  }
  if (params.has('muscle')) {
    const muscle = params.get('muscle');
    const grp = groups.find(g => g.toLowerCase() === muscle.toLowerCase());
    if (grp) {
      setGroup(grp);
      return;
    }
  }
  if (params.has('search')) {
    const q = params.get('search');
    const input = document.getElementById('exerciseSearch');
    if (input) input.value = q;
    handleSearch(q);
  }
}

// ─── KEYBOARD ACCESSIBILITY (R-32: ESCAPE KEY DISMISSAL) ─────────────────────
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const qrModal = document.getElementById('qrModal');
    if (qrModal && qrModal.style.display !== 'none') {
      closeQrModal();
      return;
    }
    if (zoomedMuscleGroup) {
      resetBodyMapZoom();
    } else if (searchQuery) {
      clearSearch();
    } else if (activeEquipmentId || activeGroup !== 'All') {
      clearActiveFilter();
    }
  }
});

// ─── INITIALIZATION ───────────────────────────────────────────────────────────
applyTheme(currentTheme);
applyLanguage();
renderMuscleGrid();
renderEquipmentCatTabs();
renderEquipmentGrid();
renderExercises();
handleUrlParams();