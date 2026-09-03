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
    form: "Set the cable low, grip the bar with a palms-up grip, and curl upward while keeping constant tension through the cable — do not swing at the top.",
    cues: "- Use the cable's direct tension; don't rush the tempo.\n- Walk back one step to keep tension at the very bottom.\n- Maintain an upright posture."
  },
  {
    group: "Biceps",
    name: "Incline Dumbbell Curl",
    equipment: "Adjustable Bench (incline), Dumbbells",
    primary: "Biceps (long head stretch)",
    secondary: "Side Bicep, Forearm Muscle",
    difficulty: "Intermediate",
    form: "Set the bench to ~60° incline, let arms hang straight down, and curl the dumbbells with a palms-up grip — the stretched starting position maximises long-head tension.",
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
    form: "Grip the bar at shoulder-width (no narrower), lower to the lower chest, and press up — the reduced grip width shifts emphasis from the chest to the triceps.",
    cues: "- Tuck your elbows tightly to your sides.\n- Do not grip too close (hands touching) to save your wrists.\n- Lower to the bottom of the sternum."
  },
  {
    group: "Triceps",
    name: "Dumbbell Overhead Tricep Extension",
    equipment: "Dumbbell",
    primary: "Triceps (long head)",
    secondary: "Elbow Joint Muscle",
    difficulty: "Intermediate",
    form: "Hold one dumbbell with both hands overhead, lower it behind your head by bending your elbows, then extend fully — keep your upper arms close to your ears.",
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
    form: "Sit with the roller pad on your lower shins, extend your legs until straight, hold for a brief squeeze at the top, then return slowly — do not let the weight slam.",
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
    form: "Rest the bar across your upper back, step forward into a long stride, lower your rear knee toward the floor, then push off the front foot to return — keep your torso upright.",
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
    form: "Hold the bar at hip-width, hinge at the hips while keeping a slight knee bend and a neutral spine — feel the hamstring stretch at the bottom, then drive the hips forward to stand.",
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
    form: "Hold a dumbbell in one hand, stand on one foot on a plate or step, and rise onto the ball of your foot — pause at the top, then lower fully to maximise the stretch.",
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
    form: "Rest your upper back on the bench, feet flat on the floor under the bar, and thrust your hips upward until your thighs are parallel to the ground — squeeze hard at the top.",
    cues: "- Check a 90-degree angle exists at your knee at the top.\n- Tuck the chin forward; ribs pinned down.\n- Squeeze the glutes aggressively at lockout."
  },
  {
    group: "Glutes",
    name: "Cable Kickback",
    equipment: "Dual Adjustable Pulley / Functional Trainer",
    primary: "Glutes (Butt)",
    secondary: "Hamstrings, Core Stabilizers",
    difficulty: "Beginner",
    form: "Attach the cable low, face the machine, brace on the frame, and kick one leg back in a controlled arc — avoid rotating the hips and keep the movement at the hip joint.",
    cues: "- Don't overextend the lower back.\n- Point the toe slightly outward to involve upper glutes.\n- Move purely from the hip socket, keep upper body frozen."
  },
  {
    group: "Glutes",
    name: "45° Leg Press (High Foot Placement)",
    equipment: "45 Degree Leg Press, Grip Weight Plates",
    primary: "Glutes / Hamstrings",
    secondary: "Quadriceps, Inner Thighs",
    difficulty: "Intermediate",
    form: "Place your feet high on the sled and use a wide stance — this shifts load from the quads toward the glutes and hamstrings as you press through the full range.",
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
    form: "Hold dumbbells at your sides, step one foot onto the bench, drive through that heel to stand fully on the bench, then step down with control — complete all reps on one side.",
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
    form: "Sit in the machine, grip the handles, and flex forward at the waist — focus on curling the ribcage toward the pelvis rather than pulling with your arms or hip flexors.",
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
    form: "Lie with your lower back on the ball, feet flat on the floor, and crunch upward by contracting the abs — the ball provides a greater range of motion than a flat floor crunch.",
    cues: "- Keep lower back moulded around the curvature of the ball.\n- Squeeze the core deliberately; do not strain the neck.\n- Get a full stretch over the ball at the bottom."
  },
  {
    group: "Core",
    name: "Adjustable Ab Bench Sit-Up",
    equipment: "Adjustable Ab Bench",
    primary: "Abs / Hip Flexors",
    secondary: "Obliques",
    difficulty: "Intermediate",
    form: "Hook your feet under the roller pads, set an angle that challenges you, and perform a controlled sit-up — lower all the way down to maximise the lowering phase.",
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
    form: "Hold the medicine ball overhead with arms extended, engage your core, and slam it to the floor as hard as possible — catch on the bounce or pick it up and repeat.",
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
    form: "Alternate between 60-second high-intensity sprints (16–20 km/h) and 90-second recovery jogs (8–10 km/h), using the incline feature for added resistance when appropriate.",
    cues: "- Strike securely in the middle of the belt.\n- Keep your chest high and gaze forward.\n- Step fully off the belt between extreme bouts if necessary."
  },
  {
    group: "Cardio",
    name: "Curved Treadmill Sprint",
    equipment: "Curved Treadmill (CS-XZ8003C)",
    primary: "Cardiovascular System",
    secondary: "Glutes, Hamstrings, Calves",
    difficulty: "Advanced",
    form: "The curved belt is self-powered by your stride — lean slightly forward, drive with your posterior chain, and let the curve naturally increase resistance as you push harder.",
    cues: "- Striding further up the front curve increases speed.\n- Back pedal lower down to brake entirely.\n- Don't hold rails while sprinting heavily."
  },
  {
    group: "Cardio",
    name: "Elliptical LISS Cardio",
    equipment: "Elliptical with Inclination (CS-E17)",
    primary: "Cardiovascular System",
    secondary: "Forearms, Shoulders, Quads",
    difficulty: "Beginner",
    form: "Set a moderate resistance and incline, maintain a steady conversational pace for 30–45 minutes — push and pull the handles to engage both upper and lower body simultaneously.",
    cues: "- Maintain solid upright posture.\n- Actually push/pull handles rather than just resting hands on them.\n- Keep foot completely flat."
  },
  {
    group: "Cardio",
    name: "Spin Bike Tabata",
    equipment: "Spin Bike (CS-K8938-3)",
    primary: "Cardiovascular System",
    secondary: "Quads, Glutes",
    difficulty: "Advanced",
    form: "Perform 8 rounds of 20 seconds maximum-effort cycling followed by 10 seconds of rest — use the resistance dial to add load and increase your flywheel speed as fitness improves.",
    cues: "- Do not attempt without proper clip-in or tightened foot cages.\n- Ensure dial has massive resistance before standing up into a sprint.\n- Focus on the 'pull' up on the pedal, not just the push down."
  },
  {
    group: "Cardio",
    name: "Battling Ropes HIIT",
    equipment: "Battling Ropes",
    primary: "Cardiovascular System",
    secondary: "Shoulders, Core, Forearms",
    difficulty: "Intermediate",
    form: "Anchor the rope at its midpoint, hold one end in each hand, and alternate or simultaneous wave patterns in 30-second bursts — keep your core tight and knees slightly bent throughout.",
    cues: "- Try entirely fluid, snapping motions sending waves ALL the way to the anchor.\n- Keep chest up and slightly sit into a quarter squat.\n- Grip tightly but remain relaxed through the arms/shoulders."
  },
  {
    group: "Cardio",
    name: "Heavy Bag Boxing Conditioning",
    equipment: "Boxing Bag (40kg)",
    primary: "Cardiovascular System / Upper Body Power",
    secondary: "Shoulders, Core, Calves",
    difficulty: "Intermediate",
    form: "Work in 3-minute rounds using a combination of jabs, crosses, hooks, and body shots — maintain a fighting stance, keep your hands up, and move your feet between combinations.",
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

// ─── STATE MANAGEMENT ────────────────────────────────────────────────────────
let activeMode = "muscles";
let activeGroup = "All";
let activeEquipmentId = null;
let activeEquipmentCategory = "All";
let searchQuery = "";
let bodyMapVisible = false;

// ─── LOCALIZATION (ENGLISH ↔ MARATHI) ─────────────────────────────────────────
const translations = {
  en: {
    headerSubhead: "Exercise Reference — Pandharpur",
    tabMuscles: "Muscle Groups",
    tabEquipment: "Equipment & Machines",
    searchPlaceholder: "Search exercises, machines, muscles...",
    showBodyMap: "Show Interactive Anatomy Map",
    hideBodyMap: "Hide Interactive Anatomy Map",
    bodyMapLabel: "Interactive Anatomy Map — Tap Any Muscle to Filter",
    bodyViewHint: "Anterior (Front) & Posterior (Back) Views",
    muscleSectionLabel: "Filter by Muscle Group",
    equipmentSectionLabel: "NSC Gym Equipment & Machine Directory",
    equipmentSubhead: "Select any machine or station to inspect matching exercises",
    activeFilterPrefix: "Active Filter:",
    clearFilterBtn: "✕ Clear Filter & Show All",
    routineTitle: "📋 Today's Session",
    routineSubtitle: "exercises added",
    clearSession: "Clear Session",
    openTimer: "Open Rest Timer",
    emptyRoutine: "No exercises added yet.<br>Click <strong>+ Session</strong> on any exercise card to build today's workout!",
    watchTutorial: "Watch Tutorial",
    commonCues: "Common Cues & Mistakes:",
    secondaryMuscles: "Secondary Muscles:",
    gymFloorMode: "Gym Floor",
    daylightMode: "Daylight",
    allExercises: "All Exercises",
    sessionBtn: "Session",
    musclesTabMob: "Muscles",
    equipTabMob: "Machines",
    bodyTabMob: "Body Map",
    timerTabMob: "Timer"
  },
  mr: {
    headerSubhead: "व्यायाम संदर्भ — पंढरपूर",
    tabMuscles: "स्नायू गट",
    tabEquipment: "जिम मशिन्स व साहित्य",
    searchPlaceholder: "व्यायाम, मशीन, स्नायू शोधा...",
    showBodyMap: "अॅनाटॉमी बॉडी मॅप पहा",
    hideBodyMap: "बॉडी मॅप लपवा",
    bodyMapLabel: "इंटरअॅक्टिव्ह अॅनाटॉमी मॅप — फिल्टर करण्यासाठी स्नायूवर टॅप करा",
    bodyViewHint: "पुढील (Front) आणि मागील (Back) बाजू",
    muscleSectionLabel: "स्नायू गटानुसार व्यायाम",
    equipmentSectionLabel: "नेताजी स्पोर्ट्स क्लब जिम मशिन्स व साहित्य",
    equipmentSubhead: "त्या मशीनवरील व्यायाम पाहण्यासाठी मशीन निवडा",
    activeFilterPrefix: "सध्याचे फिल्टर:",
    clearFilterBtn: "✕ फिल्टर काढा आणि सर्व दाखवा",
    routineTitle: "📋 आजचे वर्कआउट सेशन",
    routineSubtitle: "व्यायाम जोडले",
    clearSession: "सेशन रिकामे करा",
    openTimer: "विश्रांती टायमर उघडा",
    emptyRoutine: "अजून कोणताही व्यायाम जोडलेला नाही.<br>कोणत्याही कार्डवरील <strong>+ Session</strong> वर क्लिक करून आजचा वर्कआउट प्लॅन तयार करा!",
    watchTutorial: "व्हिडिओ ट्युटोरियल पहा",
    commonCues: "महत्त्वाच्या सूचना व चुका:",
    secondaryMuscles: "दुय्यम स्नायू:",
    gymFloorMode: "जिम फ्लोअर",
    daylightMode: "डेलाइट",
    allExercises: "सर्व व्यायाम",
    sessionBtn: "सेशन",
    musclesTabMob: "स्नायू",
    equipTabMob: "मशिन्स",
    bodyTabMob: "बॉडी मॅप",
    timerTabMob: "टायमर"
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
  renderExercises();
  renderRoutineDrawer();
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

  const searchInput = document.getElementById('exerciseSearch');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  const bodyMapToggle = document.getElementById('bodyMapToggleText');
  if (bodyMapToggle) bodyMapToggle.textContent = bodyMapVisible ? t.hideBodyMap : t.showBodyMap;

  const bodyMapLbl = document.getElementById('bodyMapLabel');
  if (bodyMapLbl) bodyMapLbl.textContent = t.bodyMapLabel;

  const bodyViewHnt = document.getElementById('bodyViewHint');
  if (bodyViewHnt) bodyViewHnt.textContent = t.bodyViewHint;

  const muscleSecLbl = document.getElementById('muscleSectionLabel');
  if (muscleSecLbl) muscleSecLbl.textContent = t.muscleSectionLabel;

  const equipSecLbl = document.getElementById('equipmentSectionLabel');
  if (equipSecLbl) equipSecLbl.textContent = t.equipmentSectionLabel;

  const equipSub = document.getElementById('equipmentSubhead');
  if (equipSub) equipSub.textContent = t.equipmentSubhead;

  const filterPfx = document.getElementById('activeFilterPrefix');
  if (filterPfx) filterPfx.textContent = t.activeFilterPrefix;

  const rstBtn = document.getElementById('resetFilterBtn');
  if (rstBtn) rstBtn.textContent = t.clearFilterBtn;

  const routTitle = document.getElementById('routineTitle');
  if (routTitle) routTitle.textContent = t.routineTitle;

  const clrRoutBtn = document.getElementById('clearRoutineBtn');
  if (clrRoutBtn) clrRoutBtn.textContent = t.clearSession;

  const opnTimerBtn = document.getElementById('openTimerBtn');
  if (opnTimerBtn) opnTimerBtn.textContent = t.openTimer;

  const sessionLbl = document.getElementById('sessionLabel');
  if (sessionLbl) sessionLbl.textContent = t.sessionBtn;

  const mobM = document.getElementById('mobMusclesLabel');
  if (mobM) mobM.textContent = t.musclesTabMob;
  const mobE = document.getElementById('mobEquipLabel');
  if (mobE) mobE.textContent = t.equipTabMob;
  const mobB = document.getElementById('mobBodyLabel');
  if (mobB) mobB.textContent = t.bodyTabMob;
  const mobT = document.getElementById('mobTimerLabel');
  if (mobT) mobT.textContent = t.timerTabMob;
}

// ─── THEME SWITCHER (DAYLIGHT ↔ GYM FLOOR DARK MODE) ──────────────────────────
let currentTheme = localStorage.getItem('nsc_theme') || 'light';

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('nsc_theme', theme);
  const icon = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');
  const t = translations[currentLang];
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  if (label) label.textContent = theme === 'dark' ? t.daylightMode : t.gymFloorMode;
}

function toggleTheme() {
  const next = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

// ─── INTERACTIVE ANATOMY BODY MAP ─────────────────────────────────────────────
function toggleBodyMap() {
  bodyMapVisible = !bodyMapVisible;
  const wrapper = document.getElementById('bodyMapWrapper');
  const toggleBtn = document.getElementById('bodyMapToggleBtn');
  const arrow = document.getElementById('bodyMapArrow');
  const text = document.getElementById('bodyMapToggleText');
  const t = translations[currentLang];

  if (wrapper) wrapper.style.display = bodyMapVisible ? 'block' : 'none';
  if (toggleBtn) toggleBtn.setAttribute('aria-expanded', bodyMapVisible);
  if (arrow) arrow.textContent = bodyMapVisible ? '▲' : '▼';
  if (text) text.textContent = bodyMapVisible ? t.hideBodyMap : t.showBodyMap;

  if (bodyMapVisible) {
    renderBodyMap();
    updateBodyMapHighlights();
  }
}

function renderBodyMap() {
  const duo = document.getElementById('bodyMapDuo');
  if (!duo) return;

  duo.innerHTML = `
    <!-- ANTERIOR (FRONT) VIEW -->
    <div class="body-view-card">
      <div class="body-view-title">Anterior (Front)</div>
      <svg class="body-svg" viewBox="0 0 200 360" role="img" aria-label="Human body front view">
        <!-- Head & Neck -->
        <circle cx="100" cy="24" r="16" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>
        <rect x="94" y="40" width="12" height="12" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>

        <!-- Shoulders / Front Delts -->
        <path d="M72,52 Q84,48 94,52 L90,74 Q74,74 72,52 Z" class="muscle-path" data-muscle="Shoulders" onclick="setGroup('Shoulders')" title="Shoulders (Front Delts)"/>
        <path d="M128,52 Q116,48 106,52 L110,74 Q126,74 128,52 Z" class="muscle-path" data-muscle="Shoulders" onclick="setGroup('Shoulders')" title="Shoulders (Front Delts)"/>

        <!-- Chest -->
        <path d="M78,56 L100,58 L122,56 L120,86 Q100,98 80,86 Z" class="muscle-path" data-muscle="Chest" onclick="setGroup('Chest')" title="Chest (Pectorals)"/>

        <!-- Biceps -->
        <path d="M68,76 L82,78 L78,116 L64,112 Z" class="muscle-path" data-muscle="Biceps" onclick="setGroup('Biceps')" title="Biceps"/>
        <path d="M132,76 L118,78 L122,116 L136,112 Z" class="muscle-path" data-muscle="Biceps" onclick="setGroup('Biceps')" title="Biceps"/>

        <!-- Forearms -->
        <path d="M63,116 L77,118 L70,160 L58,156 Z" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>
        <path d="M137,116 L123,118 L130,160 L142,156 Z" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>

        <!-- Core / Abs -->
        <path d="M84,90 L116,90 L113,142 L87,142 Z" class="muscle-path" data-muscle="Core" onclick="setGroup('Core')" title="Core (Abs)"/>

        <!-- Hips / Pelvis -->
        <path d="M82,142 L118,142 L123,168 L77,168 Z" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>

        <!-- Quads -->
        <path d="M78,170 L98,170 L94,248 L74,246 Z" class="muscle-path" data-muscle="Legs (Quads)" onclick="setGroup('Legs (Quads)')" title="Legs (Quads)"/>
        <path d="M102,170 L122,170 L126,246 L106,248 Z" class="muscle-path" data-muscle="Legs (Quads)" onclick="setGroup('Legs (Quads)')" title="Legs (Quads)"/>

        <!-- Knees -->
        <circle cx="84" cy="256" r="7" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>
        <circle cx="116" cy="256" r="7" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>

        <!-- Calves / Shins -->
        <path d="M76,266 L92,266 L88,336 L74,333 Z" class="muscle-path" data-muscle="Legs (Calves)" onclick="setGroup('Legs (Calves)')" title="Legs (Calves)"/>
        <path d="M108,266 L124,266 L126,333 L112,336 Z" class="muscle-path" data-muscle="Legs (Calves)" onclick="setGroup('Legs (Calves)')" title="Legs (Calves)"/>

        <!-- Feet -->
        <path d="M70,336 L90,336 L92,348 L68,348 Z" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>
        <path d="M110,336 L130,336 L132,348 L108,348 Z" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>
      </svg>
    </div>

    <!-- POSTERIOR (BACK) VIEW -->
    <div class="body-view-card">
      <div class="body-view-title">Posterior (Back)</div>
      <svg class="body-svg" viewBox="0 0 200 360" role="img" aria-label="Human body back view">
        <!-- Head & Neck -->
        <circle cx="100" cy="24" r="16" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>
        <rect x="94" y="40" width="12" height="12" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>

        <!-- Traps & Upper / Mid Back -->
        <path d="M72,52 Q100,44 128,52 L124,106 Q100,118 76,106 Z" class="muscle-path" data-muscle="Back" onclick="setGroup('Back')" title="Back (Lats & Traps)"/>

        <!-- Rear Shoulders -->
        <path d="M70,54 L88,54 L84,76 L66,72 Z" class="muscle-path" data-muscle="Shoulders" onclick="setGroup('Shoulders')" title="Shoulders (Rear Delts)"/>
        <path d="M130,54 L112,54 L116,76 L134,72 Z" class="muscle-path" data-muscle="Shoulders" onclick="setGroup('Shoulders')" title="Shoulders (Rear Delts)"/>

        <!-- Triceps -->
        <path d="M64,76 L80,78 L76,116 L60,112 Z" class="muscle-path" data-muscle="Triceps" onclick="setGroup('Triceps')" title="Triceps"/>
        <path d="M136,76 L120,78 L124,116 L140,112 Z" class="muscle-path" data-muscle="Triceps" onclick="setGroup('Triceps')" title="Triceps"/>

        <!-- Forearms -->
        <path d="M63,116 L77,118 L70,160 L58,156 Z" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>
        <path d="M137,116 L123,118 L130,160 L142,156 Z" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>

        <!-- Lower Back -->
        <path d="M82,108 L118,108 L114,138 L86,138 Z" class="muscle-path" data-muscle="Back" onclick="setGroup('Back')" title="Lower Back"/>

        <!-- Glutes -->
        <path d="M78,140 L99,140 L98,178 L74,175 Z" class="muscle-path" data-muscle="Glutes" onclick="setGroup('Glutes')" title="Glutes (Buttocks)"/>
        <path d="M101,140 L122,140 L126,175 L102,178 Z" class="muscle-path" data-muscle="Glutes" onclick="setGroup('Glutes')" title="Glutes (Buttocks)"/>

        <!-- Hamstrings -->
        <path d="M75,180 L97,180 L93,248 L73,246 Z" class="muscle-path" data-muscle="Legs (Hamstrings)" onclick="setGroup('Legs (Hamstrings)')" title="Legs (Hamstrings)"/>
        <path d="M103,180 L125,180 L127,246 L107,248 Z" class="muscle-path" data-muscle="Legs (Hamstrings)" onclick="setGroup('Legs (Hamstrings)')" title="Legs (Hamstrings)"/>

        <!-- Back of Knees -->
        <circle cx="84" cy="256" r="7" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>
        <circle cx="116" cy="256" r="7" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>

        <!-- Calves -->
        <path d="M74,266 L93,266 L89,336 L72,333 Z" class="muscle-path" data-muscle="Legs (Calves)" onclick="setGroup('Legs (Calves)')" title="Legs (Calves)"/>
        <path d="M107,266 L126,266 L128,336 L111,336 Z" class="muscle-path" data-muscle="Legs (Calves)" onclick="setGroup('Legs (Calves)')" title="Legs (Calves)"/>

        <!-- Feet -->
        <path d="M70,336 L90,336 L92,348 L68,348 Z" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>
        <path d="M110,336 L130,336 L132,348 L108,348 Z" fill="var(--silhouette-fill)" stroke="var(--silhouette-stroke)" stroke-width="1.5"/>
      </svg>
    </div>
  `;
}

function updateBodyMapHighlights() {
  const paths = document.querySelectorAll('.muscle-path');
  paths.forEach(p => {
    if (activeGroup !== 'All' && p.getAttribute('data-muscle') === activeGroup) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });
}

// ─── MY ROUTINE / TODAY'S SESSION (LOCALSTORAGE) ──────────────────────────────
let routine = [];
try {
  routine = JSON.parse(localStorage.getItem('nsc_routine') || '[]');
} catch (e) {
  routine = [];
}

function saveRoutineToStorage() {
  try {
    localStorage.setItem('nsc_routine', JSON.stringify(routine));
  } catch (e) {}
}

function isExerciseSaved(name) {
  return routine.some(item => item.name === name);
}

function toggleSaveExercise(name) {
  const idx = routine.findIndex(item => item.name === name);
  if (idx >= 0) {
    routine.splice(idx, 1);
  } else {
    routine.push({ name: name, sets: [false, false, false, false] });
  }
  saveRoutineToStorage();
  updateRoutineBadges();
  renderRoutineDrawer();
  renderExercises();
}

function toggleSetDone(name, setIdx) {
  const item = routine.find(i => i.name === name);
  if (item && item.sets) {
    item.sets[setIdx] = !item.sets[setIdx];
    saveRoutineToStorage();
    renderRoutineDrawer();
  }
}

function removeRoutineItem(name) {
  routine = routine.filter(i => i.name !== name);
  saveRoutineToStorage();
  updateRoutineBadges();
  renderRoutineDrawer();
  renderExercises();
}

function clearRoutine() {
  if (routine.length === 0) return;
  const msg = currentLang === 'mr' ? 'आजचे सेशन रिकामे करायचे आहे का?' : 'Clear all exercises from today\'s session?';
  if (confirm(msg)) {
    routine = [];
    saveRoutineToStorage();
    updateRoutineBadges();
    renderRoutineDrawer();
    renderExercises();
  }
}

function toggleRoutineDrawer() {
  const drawer = document.getElementById('routineDrawer');
  const backdrop = document.getElementById('routineBackdrop');
  if (!drawer || !backdrop) return;
  const isOpen = drawer.style.display !== 'none';
  if (isOpen) {
    drawer.style.display = 'none';
    backdrop.style.display = 'none';
  } else {
    drawer.style.display = 'flex';
    backdrop.style.display = 'block';
    renderRoutineDrawer();
  }
}

function updateRoutineBadges() {
  const count = routine.length;
  const badge = document.getElementById('sessionCount');
  const mobBadge = document.getElementById('mobSessionCount');
  if (badge) badge.textContent = count;
  if (mobBadge) mobBadge.textContent = count;
}

function renderRoutineDrawer() {
  const list = document.getElementById('routineList');
  const subtitle = document.getElementById('routineSubtitle');
  const t = translations[currentLang];
  if (!list) return;

  if (subtitle) {
    subtitle.textContent = `${routine.length} ${t.routineSubtitle}`;
  }

  if (routine.length === 0) {
    list.innerHTML = `<div class="routine-empty-state">${t.emptyRoutine}</div>`;
    return;
  }

  list.innerHTML = routine.map(item => {
    const ex = exercises.find(e => e.name === item.name);
    const groupName = ex ? ex.group : '';
    const allSetsDone = item.sets.every(Boolean);

    return `
      <div class="routine-item ${allSetsDone ? 'completed' : ''}">
        <div class="routine-item-top">
          <div>
            <div class="routine-item-name">${item.name}</div>
            <div style="font-size: 10px; color: var(--terra); font-family: 'Space Mono', monospace;">${groupName}</div>
          </div>
          <button class="routine-item-del" onclick="removeRoutineItem('${item.name.replace(/'/g, "\\'")}')" title="Remove exercise">✕</button>
        </div>
        <div class="routine-sets-tracker">
          <span class="sets-label">Sets:</span>
          ${item.sets.map((done, idx) => `
            <button class="set-check-btn ${done ? 'done' : ''}" onclick="toggleSetDone('${item.name.replace(/'/g, "\\'")}', ${idx})" title="Toggle Set ${idx + 1}">
              ${done ? '✓' : idx + 1}
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// ─── GYM REST TIMER WITH AUDIO CHIME & VIBRATION ──────────────────────────────
let timerSeconds = 60;
let timerTotal = 60;
let timerRunning = false;
let timerInterval = null;
let soundEnabled = true;
let audioCtx = null;

function playChime() {
  if (!soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const now = audioCtx.currentTime;
    // Tone 1
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(880, now); // A5
    gain1.gain.setValueAtTime(0.2, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);
    osc1.start(now);
    osc1.stop(now + 0.25);

    // Tone 2
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1760, now + 0.15); // A6
    gain2.gain.setValueAtTime(0.25, now + 0.15);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
    osc2.connect(gain2);
    gain2.connect(audioCtx.destination);
    osc2.start(now + 0.15);
    osc2.stop(now + 0.55);
  } catch (err) {
    console.log("Web audio error", err);
  }

  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }
}

function formatTimer(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function updateTimerDisplay() {
  const timeStr = formatTimer(timerSeconds);
  const miniDigits = document.getElementById('timerMiniDigits');
  const bigDigits = document.getElementById('timerBigDigits');
  const bar = document.getElementById('timerBarFill');
  const dot = document.getElementById('timerStatusDot');
  const playBtn = document.getElementById('timerPlayBtn');

  if (miniDigits) miniDigits.textContent = timeStr;
  if (bigDigits) bigDigits.textContent = timeStr;
  if (bar) {
    const pct = (timerSeconds / timerTotal) * 100;
    bar.style.width = `${Math.max(0, pct)}%`;
  }
  if (dot) {
    if (timerRunning) dot.classList.add('running');
    else dot.classList.remove('running');
  }
  if (playBtn) {
    playBtn.textContent = timerRunning ? '❚❚ Pause' : '▶ Start';
  }
}

function toggleTimerPlay() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
  } else {
    if (timerSeconds <= 0) timerSeconds = timerTotal;
    timerRunning = true;
    timerInterval = setInterval(() => {
      timerSeconds--;
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        timerRunning = false;
        timerSeconds = 0;
        playChime();
      }
      updateTimerDisplay();
    }, 1000);
  }
  updateTimerDisplay();
}

function resetRestTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = timerTotal;
  updateTimerDisplay();
}

function setTimerPreset(sec) {
  clearInterval(timerInterval);
  timerRunning = false;
  timerTotal = sec;
  timerSeconds = sec;
  document.querySelectorAll('.preset-btn').forEach(btn => {
    if (btn.textContent.trim() === `${sec}s`) btn.classList.add('active');
    else btn.classList.remove('active');
  });
  updateTimerDisplay();
}

function expandTimer() {
  const min = document.getElementById('timerMinimized');
  const exp = document.getElementById('timerExpanded');
  if (min) min.style.display = 'none';
  if (exp) exp.style.display = 'flex';
}

function minimizeTimer() {
  const min = document.getElementById('timerMinimized');
  const exp = document.getElementById('timerExpanded');
  if (min) min.style.display = 'flex';
  if (exp) exp.style.display = 'none';
}

function toggleTimerSound() {
  soundEnabled = !soundEnabled;
  const btn = document.getElementById('soundToggleBtn');
  if (btn) btn.textContent = soundEnabled ? '🔊' : '🔇';
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
  const muscleSection = document.getElementById('muscleSection');
  const equipmentSection = document.getElementById('equipmentSection');
  const mobM = document.getElementById('mobNavMuscles');
  const mobE = document.getElementById('mobNavEquip');

  if (mode === 'muscles') {
    if (tabMuscles) { tabMuscles.classList.add('active'); tabMuscles.setAttribute('aria-selected', 'true'); }
    if (tabEquipment) { tabEquipment.classList.remove('active'); tabEquipment.setAttribute('aria-selected', 'false'); }
    if (muscleSection) muscleSection.style.display = 'block';
    if (equipmentSection) equipmentSection.style.display = 'none';
    if (mobM) mobM.classList.add('active');
    if (mobE) mobE.classList.remove('active');
  } else {
    if (tabEquipment) { tabEquipment.classList.add('active'); tabEquipment.setAttribute('aria-selected', 'true'); }
    if (tabMuscles) { tabMuscles.classList.remove('active'); tabMuscles.setAttribute('aria-selected', 'false'); }
    if (muscleSection) muscleSection.style.display = 'none';
    if (equipmentSection) equipmentSection.style.display = 'block';
    if (mobE) mobE.classList.add('active');
    if (mobM) mobM.classList.remove('active');
    renderEquipmentCatTabs();
    renderEquipmentGrid();
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

    return `
      <div class="equipment-card ${isSelected ? 'selected' : ''}" onclick="filterByEquipment('${eq.id}')">
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
          <span class="eq-badge">${eq.category}</span>
          <span class="eq-action-btn">View Exercises →</span>
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
    card.classList.toggle('expanded');
  }
}

const learningData = {
  "Chest": { desc: "The chest muscles are used for pushing things away and bringing your arms together in front of you.", video: "https://www.youtube.com/watch?v=JtFM_fF1UOY" },
  "Back": { desc: "The back includes the lats (outer back), mid-back, and lower back, which are essential for pulling things and keeping a straight posture.", video: "https://www.youtube.com/watch?v=SUPLFfyA1Zg" },
  "Shoulders": { desc: "The shoulders consist of three parts (front, side, and rear) that help you lift your arms in all directions.", video: "https://www.youtube.com/watch?v=wyc2rCJl4qE" },
  "Biceps": { desc: "The biceps are on the front of your arm and are responsible for bending your elbow and turning your palms up.", video: "https://www.youtube.com/watch?v=lqDSKvxSYE4" },
  "Triceps": { desc: "The triceps make up about two-thirds of your upper arm and are used to completely straighten your arm.", video: "https://www.youtube.com/watch?v=pOb1ENhYoYg" },
  "Legs (Quads)": { desc: "The quads are the large muscles on the front of your thigh, used for straightening your knee and pushing up from a squat.", video: "https://www.youtube.com/watch?v=8b-7mJmWHmA" },
  "Legs (Hamstrings)": { desc: "The hamstrings run down the back of your thigh and help you bend your knee and push your hips forward.", video: "https://www.youtube.com/watch?v=_xD9FHZj618" },
  "Legs (Calves)": { desc: "The calves are located on the back of your lower leg and help you point your toes and push off the ground.", video: "https://www.youtube.com/watch?v=DHd-5TpPWq4" },
  "Glutes": { desc: "The glutes (your buttocks) are the largest and most powerful muscles in your body, essential for standing up and walking.", video: "https://www.youtube.com/watch?v=_xD9FHZj618" },
  "Core": { desc: "The core includes your abs and deeper midsection muscles, keeping you balanced and protecting your spine.", video: "https://www.youtube.com/watch?v=iqRzWHSpAJo" },
  "Cardio": { desc: "Cardio workouts strengthen your heart and lungs, building your stamina so you don't get out of breath easily.", video: "https://www.youtube.com/watch?v=VI4gTm5lvjo" },
  "Mobility": { desc: "Mobility training improves joint health, reduces pain, and drastically enhances your performance in the gym. Explore Squat University's highly-regarded mobility blogs here.", video: "https://squatuniversity.com/featured-links/blog/" }
};

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
      <div class="no-results">
        No exercises found for current selection.
        <br><br>
        <button class="reset-filter-btn" onclick="clearActiveFilter()" style="display:inline-block;">Show All Exercises</button>
      </div>
    `;
    return;
  }

  let html = '';

  // Show Learning Banner only when in muscle group mode (and not searched / equipment filtered)
  if (!searchQuery && !activeEquipmentId && activeGroup !== "All" && learningData[activeGroup]) {
    const data = learningData[activeGroup];
    html += `
      <div class="learning-banner">
        <div class="banner-content">
          <h3>${activeGroup} Anatomy</h3>
          <p>${data.desc}</p>
        </div>
        <a class="yt-btn banner-btn" href="${data.video}" target="_blank" rel="noopener">
          ${activeGroup === 'Mobility' ? '📖 Read Blogs' : ytIcon() + ' Study Muscle'}
        </a>
      </div>
    `;
  }

  html += filtered.map((ex, i) => {
    const isSaved = isExerciseSaved(ex.name);
    return `
      <div class="exercise-card" id="card-${i}" style="animation-delay:${i * 0.03}s" onclick="toggleCard('card-${i}')">
        <div class="card-header">
          <div class="ex-name">${ex.name}</div>
          <button class="card-save-btn ${isSaved ? 'saved' : ''}" onclick="event.stopPropagation(); toggleSaveExercise('${ex.name.replace(/'/g, "\\'")}')" title="Add to session">
            ${isSaved ? '✓ Saved' : '+ Session'}
          </button>
          <div class="expand-icon">▼</div>
        </div>
        <div class="ex-tags">
          <span class="tag primary">${ex.primary}</span>
          <span class="tag">${ex.group}</span>
          <span class="tag ${ex.difficulty.toLowerCase()}">${ex.difficulty}</span>
        </div>
        <div class="ex-equipment"><strong>Equipment:</strong> ${formatEquipmentText(ex.equipment)}</div>
        <div class="ex-form">${ex.form}</div>
        
        <div class="ex-details" onclick="event.stopPropagation()">
          <div><strong>${t.secondaryMuscles}</strong> ${ex.secondary}</div>
          <div class="ex-cues">
            <strong>${t.commonCues}</strong><br/>
            ${ex.cues.replace(/\n/g, '<br/>')}
          </div>
          <a class="yt-btn" href="${ex.video ? ex.video : ytUrl(ex.name)}" target="_blank" rel="noopener">
            ${ytIcon()} ${t.watchTutorial}
          </a>
        </div>
      </div>
    `;
  }).join('');

  grid.innerHTML = html;
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

  const target = document.getElementById('exercisesHeader');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  if (params.has('machine')) {
    const machineId = params.get('machine');
    const eq = equipments.find(e => e.id === machineId);
    if (eq) {
      switchMode('equipment');
      filterByEquipment(machineId);
      return;
    }
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

// ─── INITIALIZATION ───────────────────────────────────────────────────────────
applyTheme(currentTheme);
applyLanguage();
renderMuscleGrid();
renderEquipmentCatTabs();
renderEquipmentGrid();
updateRoutineBadges();
updateTimerDisplay();
renderExercises();
handleUrlParams();