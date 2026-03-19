const exercises = [
  // CHEST
  {
    group: "Chest",
    name: "Barbell Bench Press",
    equipment: "Flat Olympic Press station, 7ft Olympic Barbell, Grip Weight Plates",
    primary: "Chest",
    secondary: "Anterior Deltoid, Triceps",
    difficulty: "Intermediate",
    form: "Lie flat, grip slightly wider than shoulder-width, lower the bar to mid-chest with control and press up to full extension without locking out.",
    cues: "- Keep wrists straight.\n- Don't flare elbows fully out.\n- Maintain 5 points of contact (feet, glutes, upper back, head)."
  },
  {
    group: "Chest",
    name: "Incline Barbell Press",
    equipment: "Incline Bench Press station, 7ft Olympic Barbell, Grip Weight Plates",
    primary: "Upper Chest",
    secondary: "Anterior Deltoid, Triceps",
    difficulty: "Intermediate",
    form: "Set the incline to ~30–45°, grip just outside shoulder-width, and press the bar in a slight arc toward the upper chest, keeping shoulders back.",
    cues: "- Avoid pressing over the face.\n- Don't push your lower back off the bench heavily.\n- Keep shoulder blades retracted."
  },
  {
    group: "Chest",
    name: "Smith Machine Bench Press",
    equipment: "Smith Machine, Flat Bench, Grip Weight Plates",
    primary: "Chest",
    secondary: "Anterior Deltoid, Triceps",
    difficulty: "Beginner",
    form: "Position the bench inside the Smith Machine, unrack the bar directly above your chest, lower with a 2-second tempo, and press up without drifting the path.",
    cues: "- Ensure the bar lowers to mid-chest, not the neck.\n- Keep feet planted for stability.\n- Engage core throughout the movement."
  },
  {
    group: "Chest",
    name: "Cable Chest Fly (High-to-Low)",
    equipment: "Dual Adjustable Pulley / Functional Trainer",
    primary: "Lower Chest",
    secondary: "Anterior Deltoid",
    difficulty: "Intermediate",
    form: "Set pulleys high, step forward into a split stance, and draw the handles down and together in a wide arc, keeping a slight elbow bend throughout.",
    cues: "- Keep a slight bend in the elbows to protect the biceps.\n- Squeeze chest at the bottom.\n- Maintain a proud chest; avoid rounding forward."
  },
  {
    group: "Chest",
    name: "Dumbbell Flat Press",
    equipment: "Flat Bench, Dumbbells",
    primary: "Chest",
    secondary: "Anterior Deltoid, Triceps",
    difficulty: "Intermediate",
    form: "Lie flat with dumbbells at chest level, press them up until arms are extended, then lower slowly with elbows at ~45° to the torso.",
    cues: "- Keep dumbbells level.\n- Do not forcefully clink bells together at top.\n- Tuck elbows slightly (45 deg) to protect shoulders."
  },
  {
    group: "Chest",
    name: "Chest Fly Machine",
    equipment: "Chest Fly / Rear Delt Machine",
    primary: "Chest",
    secondary: "Anterior Deltoid",
    difficulty: "Beginner",
    form: "Adjust the seat so handles align with your chest, press the pads together in a controlled arc, and squeeze the chest at full contraction before returning slowly.",
    cues: "- Ensure elbows remain high but slightly below shoulders.\n- Control the eccentric phase; don't let it slam back.\n- Keep your back flat against the pad."
  },

  // BACK
  {
    group: "Back",
    name: "Lat Pulldown",
    equipment: "Lat Pulldown Machine",
    primary: "Latissimus Dorsi",
    secondary: "Biceps, Rhomboids, Traps",
    difficulty: "Beginner",
    form: "Sit with thighs anchored, grip wide overhand, lean back slightly, and pull the bar to your upper chest by driving your elbows down and back.",
    cues: "- Lead with the elbows.\n- Don't pull behind the neck.\n- Minimize momentum and arching."
  },
  {
    group: "Back",
    name: "Seated Cable Row",
    equipment: "Seated Row Machine",
    primary: "Mid-Back / Rhomboids",
    secondary: "Lats, Biceps, Traps",
    difficulty: "Beginner",
    form: "Sit upright with a slight lean forward, pull the handle into your lower abdomen, squeeze the shoulder blades together at the end, and return with control.",
    cues: "- Do not round the lower back.\n- Avoid leaning back excessively to pull the weight.\n- Focus on scapular retraction at the peak."
  },
  {
    group: "Back",
    name: "Barbell Bent-Over Row",
    equipment: "7ft Olympic Barbell, Grip Weight Plates, Weight Lifting Platform",
    primary: "Lats / Rhomboids",
    secondary: "Spinal Erectors, Biceps, Traps",
    difficulty: "Advanced",
    form: "Hinge at the hips to ~45°, pull the bar to your lower ribcage with a pronated grip, lead with the elbows, and maintain a neutral spine throughout.",
    cues: "- Keep your lower back braced and neutral.\n- Pull towards the belly button, not the chest.\n- Don't jerk your torso up to move the weight."
  },
  {
    group: "Back",
    name: "Single-Arm Dumbbell Row",
    equipment: "Flat Bench, Dumbbells",
    primary: "Lats",
    secondary: "Biceps, Rhomboids, Traps",
    difficulty: "Intermediate",
    form: "Place one hand and knee on the bench for support, pull the dumbbell straight up toward your hip, keeping your elbow close to your torso.",
    cues: "- Pull the bell to your hip (J-curve path).\n- Keep your torso flat; resist rotating your shoulders.\n- Keep your elbow tight to your side."
  },
  {
    group: "Back",
    name: "Cable Straight-Arm Pulldown",
    equipment: "Dual Adjustable Pulley / Functional Trainer",
    primary: "Lats",
    secondary: "Posterior Deltoid, Triceps (Long Head)",
    difficulty: "Intermediate",
    form: "Set the pulley high, hold the rope with straight arms, and pull it down to your thighs in a sweeping arc while keeping your core braced.",
    cues: "- Avoid bending the elbows to use triceps.\n- Hinge slightly at the hips.\n- Focus heavily on getting a deep stretch at the top."
  },
  {
    group: "Back",
    name: "Assisted Pull-Up (Chin-Up Grip)",
    equipment: "Assisted Dip / Chin Machine",
    primary: "Lats / Biceps",
    secondary: "Traps, Rhomboids",
    difficulty: "Beginner",
    form: "Use the counterweight to assist, grip the handles supinated (palms facing you), and pull yourself up until your chin clears the bar, then lower with control.",
    cues: "- Fully extend arms at the bottom.\n- Do not kick your legs for momentum.\n- Puff your chest out to meet the bar."
  },

  // SHOULDERS
  {
    group: "Shoulders",
    name: "Dumbbell Overhead Press",
    equipment: "Dumbbells, Utility Bench (or standing)",
    primary: "Anterior / Lateral Deltoid",
    secondary: "Triceps, Upper Traps",
    difficulty: "Intermediate",
    form: "Hold dumbbells at ear level with palms facing forward, press straight up overhead until arms are nearly extended, then lower back to start without flaring the elbows excessively.",
    cues: "- Avoid excessive arching in the lower back.\n- Keep forearms stacked vertically beneath dumbbells.\n- Press slightly backwards, ending with biceps by ears."
  },
  {
    group: "Shoulders",
    name: "Dumbbell Lateral Raise",
    equipment: "Dumbbells",
    primary: "Lateral Deltoid",
    secondary: "Anterior Deltoid, Upper Traps",
    difficulty: "Beginner",
    form: "Stand with a slight forward lean, raise the dumbbells out to your sides with a slight elbow bend until they reach shoulder height, leading with the elbows.",
    cues: "- Initiate the lift with your elbows, not wrists.\n- Do not swing your torso for momentum.\n- Pinkies slightly up at the top (like pouring water)."
  },
  {
    group: "Shoulders",
    name: "Cable Face Pull",
    equipment: "Dual Adjustable Pulley / Functional Trainer, Mag Handle / Rope",
    primary: "Rear Deltoid / Rotator Cuff",
    secondary: "Mid-Traps, Rhomboids",
    difficulty: "Intermediate",
    form: "Set the cable at forehead height, pull the rope toward your face while externally rotating your arms so your hands finish beside your ears.",
    cues: "- Flare the elbows high and wide.\n- Point the thumbs backward.\n- Keep your chest tall."
  },
  {
    group: "Shoulders",
    name: "Rear Delt Machine Fly",
    equipment: "Chest Fly / Rear Delt Machine",
    primary: "Rear Deltoid",
    secondary: "Rhomboids, Mid-Traps",
    difficulty: "Beginner",
    form: "Face the machine pad, grip the rear handles with arms extended, and squeeze the handles apart in a wide arc, leading with the elbows and not the hands.",
    cues: "- Retract the shoulders gently, don't over-shrug.\n- Press the chest firmly into the pad.\n- Focus on sweeping widely, not just pulling back."
  },
  {
    group: "Shoulders",
    name: "Smith Machine Overhead Press",
    equipment: "Smith Machine, Utility Bench, Grip Weight Plates",
    primary: "Anterior Deltoid",
    secondary: "Triceps, Upper Traps",
    difficulty: "Beginner",
    form: "Sit upright on a bench inside the Smith, unrack the bar just in front of your nose, press straight up to full extension, and lower with control to chin height.",
    cues: "- Find the natural bar path so it drops just in front of your face.\n- Ensure the bench is fully upright or at an 85° angle.\n- Don't bounce the weight at the bottom."
  },
  {
    group: "Shoulders",
    name: "Dumbbell Front Raise",
    equipment: "Dumbbells",
    primary: "Anterior Deltoid",
    secondary: "Pectoralis Major (Clavicular Head)",
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
    secondary: "Brachialis, Forearm Flexors",
    difficulty: "Beginner",
    form: "Stand with the EZ bar at arm's length using a semi-supinated grip, curl the bar to shoulder height while keeping elbows pinned to your sides, then lower fully.",
    cues: "- Do not use hip swing/momentum.\n- Keep elbows glued to the ribs.\n- Extend arms completely at the bottom."
  },
  {
    group: "Biceps",
    name: "Preacher Curl (Barbell)",
    equipment: "Preacher Curl Station, EZ Curl Bar / Short Barbell, Grip Weight Plates",
    primary: "Biceps (long head isolation)",
    secondary: "Brachialis, Brachioradialis",
    difficulty: "Intermediate",
    form: "Sit with the back of your upper arms flat against the preacher pad, curl the bar up to peak contraction, then extend fully for a complete stretch at the bottom.",
    cues: "- Ensure your armpits sit flush with the top of the pad.\n- Don't lift your elbows off the pad at the bottom.\n- Lower slowly to avoid bicep tears under heavy load."
  },
  {
    group: "Biceps",
    name: "Dumbbell Hammer Curl",
    equipment: "Dumbbells",
    primary: "Brachialis / Biceps",
    secondary: "Brachioradialis (Forearms)",
    difficulty: "Beginner",
    form: "Hold dumbbells with a neutral grip (palms facing each other) and curl them alternately to shoulder height while keeping your elbows stationary at your sides.",
    cues: "- Avoid swinging the body.\n- Squeeze the handle tightly to engage forearms.\n- Curl across the body slightly if regular form strains elbows."
  },
  {
    group: "Biceps",
    name: "Cable Bicep Curl",
    equipment: "Dual Adjustable Pulley / Functional Trainer",
    primary: "Biceps",
    secondary: "Brachialis, Forearm Flexors",
    difficulty: "Beginner",
    form: "Set the cable low, grip the bar with a supinated grip, and curl upward while keeping constant tension through the cable — do not swing at the top.",
    cues: "- Use the cable's direct tension; don't rush the tempo.\n- Walk back one step to keep tension at the very bottom.\n- Maintain an upright posture."
  },
  {
    group: "Biceps",
    name: "Incline Dumbbell Curl",
    equipment: "Adjustable Bench (incline), Dumbbells",
    primary: "Biceps (long head stretch)",
    secondary: "Brachialis, Brachioradialis",
    difficulty: "Intermediate",
    form: "Set the bench to ~60° incline, let arms hang straight down, and curl the dumbbells with a supinated grip — the stretched starting position maximises long-head tension.",
    cues: "- Let your arms hang completely straight behind your torso.\n- Roll your wrists outward to maximize bicep peak contraction.\n- Don't let elbows drift forward during the curl."
  },

  // TRICEPS
  {
    group: "Triceps",
    name: "Skull Crusher",
    equipment: "Flat Bench, EZ Curl Bar, Grip Weight Plates",
    primary: "Triceps",
    secondary: "Anconeus",
    difficulty: "Intermediate",
    form: "Lie on a flat bench holding an EZ bar with a narrow overhand grip. Lower the bar toward your forehead or slightly behind your head by bending the elbows, keeping the upper arms stationary, then extend back up.",
    cues: "- Keep your elbows pointing toward the ceiling, not flaring too far out.\n- Control the eccentric (lowering) phase carefully.\n- Do not move your upper arm; all movement is at the elbow joint."
  },
  {
    group: "Triceps",
    name: "Cable Tricep Pushdown",
    equipment: "Dual Adjustable Pulley / Functional Trainer, Mag Handle",
    primary: "Triceps",
    secondary: "Anconeus",
    difficulty: "Beginner",
    form: "Set the cable high, grip the handle overhand with elbows tucked, and push the bar straight down until arms are fully extended, squeezing the triceps at the bottom.",
    cues: "- Lock the elbows at the sides.\n- Fully straighten the arm downward.\n- Yield only until forearms break 90 degrees on the way up."
  },
  {
    group: "Triceps",
    name: "Overhead Cable Tricep Extension",
    equipment: "Dual Adjustable Pulley / Functional Trainer, Rope Attachment",
    primary: "Triceps (long head)",
    secondary: "Anconeus",
    difficulty: "Intermediate",
    form: "Face away from the cable, hold the rope overhead with elbows bent, and extend your arms forward and up while keeping your upper arms stationary.",
    cues: "- Keep your upper arms beside your head.\n- Hinge slightly at hips to create a stable base.\n- Spread the rope apart at the top peak."
  },
  {
    group: "Triceps",
    name: "Assisted Tricep Dip",
    equipment: "Assisted Dip / Chin Machine",
    primary: "Triceps",
    secondary: "Chest, Anterior Deltoids",
    difficulty: "Beginner",
    form: "Use the counterweight for assistance, grip the parallel bars, lean slightly forward, lower until elbows reach ~90°, and press back up to straight arms.",
    cues: "- Keep your torso upright to target the triceps.\n- Don't let shoulders roll forward excessively.\n- Maintain control in the eccentric phase."
  },
  {
    group: "Triceps",
    name: "Close-Grip Bench Press",
    equipment: "Flat Olympic Press station, 7ft Barbell, Grip Weight Plates",
    primary: "Triceps",
    secondary: "Chest, Anterior Deltoids",
    difficulty: "Advanced",
    form: "Grip the bar at shoulder-width (no narrower), lower to the lower chest, and press up — the reduced grip width shifts emphasis from the chest to the triceps.",
    cues: "- Tuck your elbows tightly to your sides.\n- Do not grip too close (hands touching) to save your wrists.\n- Lower to the bottom of the sternum."
  },
  {
    group: "Triceps",
    name: "Dumbbell Overhead Tricep Extension",
    equipment: "Dumbbell",
    primary: "Triceps (long head)",
    secondary: "Anconeus",
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
    secondary: "Glutes, Adductors, Calves",
    difficulty: "Intermediate",
    form: "Shoulder-width stance on the footplate, unhook the safeties, descend until your thighs are parallel (or deeper), then drive through your heels to full extension.",
    cues: "- Place feet lower on the platform to maximise quad bias.\n- Don't bounce out of the bottom hole.\n- Ensure your back stays flat against the pad at all times."
  },
  {
    group: "Legs (Quads)",
    name: "45° Leg Press",
    equipment: "45 Degree Leg Press, Grip Weight Plates",
    primary: "Quadriceps",
    secondary: "Glutes, Hamstrings, Adductors",
    difficulty: "Beginner",
    form: "Place feet shoulder-width on the sled, release the safeties, lower until thighs reach 90°, then push the platform away without locking your knees at the top.",
    cues: "- DO NOT lock elbows with hands on knees to push.\n- Never fully lock out the knees (hyper-extend) at the top.\n- Keep your glutes firmly rooted to the seat pad."
  },
  {
    group: "Legs (Quads)",
    name: "Seated Leg Extension",
    equipment: "Seated Leg Extension Machine",
    primary: "Quadriceps (isolation)",
    secondary: "None",
    difficulty: "Beginner",
    form: "Sit with the roller pad on your lower shins, extend your legs until straight, hold for a brief squeeze at the top, then return slowly — do not let the weight slam.",
    cues: "- Adjust pad to sit immediately above the top of your shoes.\n- Brace firmly into the seat handles.\n- Pull your toes backwards (dorsiflexion) for better contraction."
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
    secondary: "Calves (Gastrocnemius)",
    difficulty: "Beginner",
    form: "Sit with the roller pad on top of your lower shins, curl the pad back toward your glutes through the full range of motion, then extend slowly under control.",
    cues: "- Secure the lap pad firmly over your thighs.\n- Squeeze hamstrings tightly at the peak contraction.\n- Control the eccentric; do not slam the weight stack."
  },
  {
    group: "Legs (Hamstrings)",
    name: "Romanian Deadlift",
    equipment: "7ft Olympic Barbell, Grip Weight Plates, Weight Lifting Platform",
    primary: "Hamstrings / Glutes",
    secondary: "Spinal Erectors, Forearms, Traps",
    difficulty: "Advanced",
    form: "Hold the bar at hip-width, hinge at the hips while keeping a slight knee bend and a neutral spine — feel the hamstring stretch at the bottom, then drive the hips forward to stand.",
    cues: "- Push your hips back until you feel a deep stretch in hamstrings.\n- Do NOT reach for the floor; stop when hips stop moving back.\n- Keep the barbell sliding right up and down your thighs/shins."
  },
  {
    group: "Legs (Hamstrings)",
    name: "Dumbbell Romanian Deadlift",
    equipment: "Dumbbells",
    primary: "Hamstrings",
    secondary: "Glutes, Spinal Erectors, Forearms",
    difficulty: "Intermediate",
    form: "Hold dumbbells in front of your thighs, hinge forward with a neutral back until you feel a full hamstring stretch, then squeeze your glutes to return upright.",
    cues: "- Drag dumbbells down the front of the legs.\n- Prevent the back from rounding.\n- Chin tucked neutrally."
  },
  {
    group: "Legs (Hamstrings)",
    name: "Smith Machine Romanian Deadlift",
    equipment: "Smith Machine, Grip Weight Plates",
    primary: "Hamstrings / Glutes",
    secondary: "Spinal Erectors, Forearms",
    difficulty: "Intermediate",
    form: "Set the bar at hip height in the Smith, use an overhand grip, hinge back with control, hold the stretch for a second at the bottom, then return by driving the hips through.",
    cues: "- Allows focus purely on the hip hinge mechanics.\n- Stand slightly away from the bar so it runs along the shins.\n- Squeeze the glutes powerfully at the top."
  },
  {
    group: "Legs (Hamstrings)",
    name: "Cable Pull-Through",
    equipment: "Dual Adjustable Pulley / Functional Trainer, Rope Attachment",
    primary: "Hamstrings / Glutes",
    secondary: "Spinal Erectors, Core",
    difficulty: "Beginner",
    form: "Face away from the cable with the rope between your legs, hinge at the hips until your torso is near parallel, then drive your hips forward to stand tall.",
    cues: "- Arms and shoulders completely relaxed.\n- Let the cable pull your hips backward.\n- Contract the glutes to force the hips through."
  },

  // LEGS (CALVES)
  {
    group: "Legs (Calves)",
    name: "Seated Calf Raise",
    equipment: "Seated Calf Raise Machine, Grip Weight Plates",
    primary: "Soleus (Calves)",
    secondary: "None",
    difficulty: "Beginner",
    form: "Place the pads on your lower thighs just above the knees, position the balls of your feet on the edge, drop heels fully for a stretch, then rise onto tiptoes.",
    cues: "- Emphasise the stretch; pause at the bottom for 1-2 seconds.\n- Go onto your highest tiptoes at the peak.\n- Do not bounce the weight."
  },
  {
    group: "Legs (Calves)",
    name: "Standing Calf Raise (Smith Machine)",
    equipment: "Smith Machine, Grip Weight Plates",
    primary: "Gastrocnemius (Calves)",
    secondary: "Core (Stabilization)",
    difficulty: "Intermediate",
    form: "Stand on a plate or raised surface under the Smith bar, unhook and rise up on the balls of your feet for a full contraction, then lower slowly for a deep stretch.",
    cues: "- Keep knees straight but not hyper-locked.\n- Hold the peak stretch at the bottom to kill momentum.\n- Control the descent strictly."
  },
  {
    group: "Legs (Calves)",
    name: "Leg Press Calf Raise",
    equipment: "45 Degree Leg Press",
    primary: "Gastrocnemius (Calves)",
    secondary: "None",
    difficulty: "Beginner",
    form: "Place only the balls of your feet at the edge of the sled, straighten your legs, then push through your toes to full plantarflexion and slowly lower back down.",
    cues: "- Keep safety stops engaged on the machine.\n- Ensure feet do not slip off the bottom edge.\n- Keep knees fixed in a very slight bend."
  },
  {
    group: "Legs (Calves)",
    name: "Dumbbell Single-Leg Calf Raise",
    equipment: "Dumbbell, Weight Plate (for elevation)",
    primary: "Gastrocnemius (unilateral)",
    secondary: "Soleus, Stabilizers",
    difficulty: "Intermediate",
    form: "Hold a dumbbell in one hand, stand on one foot on a plate or step, and rise onto the ball of your foot — pause at the top, then lower fully to maximise the stretch.",
    cues: "- Hold a stationary object with the empty hand for balance.\n- Slow eccentric (lowering) phase to build maximum tension.\n- Complete full range of motion heavily loading the single calf."
  },

  // GLUTES
  {
    group: "Glutes",
    name: "Hip Thrust (Smith Machine)",
    equipment: "Smith Machine, Flat Bench, Grip Weight Plates",
    primary: "Gluteus Maximus",
    secondary: "Hamstrings, Core",
    difficulty: "Intermediate",
    form: "Rest your upper back on the bench, feet flat on the floor under the bar, and thrust your hips upward until your thighs are parallel to the ground — squeeze hard at the top.",
    cues: "- Check a 90-degree angle exists at your knee at the top.\n- Tuck the chin forward; ribs pinned down.\n- Squeeze the glutes aggressively at lockout."
  },
  {
    group: "Glutes",
    name: "Cable Kickback",
    equipment: "Dual Adjustable Pulley / Functional Trainer",
    primary: "Gluteus Maximus",
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
    secondary: "Quadriceps, Adductors",
    difficulty: "Intermediate",
    form: "Place your feet high on the sled and use a wide stance — this shifts load from the quads toward the glutes and hamstrings as you press through the full range.",
    cues: "- Push distinctly through the heels, not the toes.\n- Squeeze knees out slightly tracking toes.\n- Ensure glutes don't tuck under and lift off the pad."
  },
  {
    group: "Glutes",
    name: "Barbell Sumo Deadlift",
    equipment: "7ft Olympic Barbell, Grip Weight Plates, Weight Lifting Platform",
    primary: "Glutes / Adductors",
    secondary: "Hamstrings, Quads, Spinal Erectors, Traps",
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
    name: "Rectus Abdominis Machine Crunch",
    equipment: "Rectus Abdominis Trainer",
    primary: "Rectus Abdominis",
    secondary: "Obliques",
    difficulty: "Beginner",
    form: "Sit in the machine, grip the handles, and flex forward at the waist — focus on curling the ribcage toward the pelvis rather than pulling with your arms or hip flexors.",
    cues: "- Try not to push excessively with the legs.\n- Exhale forcefully as you crunch forward.\n- Round your back intentionally into a 'C' curve."
  },
  {
    group: "Core",
    name: "Cable Woodchop",
    equipment: "Dual Adjustable Pulley / Functional Trainer",
    primary: "Obliques / Transverse Abdominis",
    secondary: "Shoulders, Rectus Abdominis",
    difficulty: "Intermediate",
    form: "Set the cable high on one side, hold with both hands, and rotate your torso diagonally downward across your body while keeping your arms extended and hips stable.",
    cues: "- Keep the arms straight; don't chop with arm strength.\n- Turn the shoulders aggressively.\n- Maintain strong footing on the ground."
  },
  {
    group: "Core",
    name: "Gym Ball Crunch",
    equipment: "Gym Ball (75cm)",
    primary: "Rectus Abdominis",
    secondary: "Transverse Abdominis",
    difficulty: "Beginner",
    form: "Lie with your lower back on the ball, feet flat on the floor, and crunch upward by contracting the abs — the ball provides a greater range of motion than a flat floor crunch.",
    cues: "- Keep lower back moulded around the curvature of the ball.\n- Squeeze the core deliberately; do not strain the neck.\n- Get a full stretch over the ball at the bottom."
  },
  {
    group: "Core",
    name: "Adjustable Ab Bench Sit-Up",
    equipment: "Adjustable Ab Bench",
    primary: "Rectus Abdominis / Hip Flexors",
    secondary: "Obliques",
    difficulty: "Intermediate",
    form: "Hook your feet under the roller pads, set an angle that challenges you, and perform a controlled sit-up — lower all the way down to maximise the eccentric phase.",
    cues: "- Try to reduce reliance on flinging momentum.\n- Breathe out deeply ascending.\n- Control the drop heavily; don't just fall backward."
  },
  {
    group: "Core",
    name: "Barbell Rollout",
    equipment: "Short Barbell (4ft or 5ft), Weight Lifting Platform",
    primary: "Transverse Abdominis / Core Stability",
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
    name: "Boxing Bag Rounds",
    equipment: "Boxing Bag (40kg)",
    primary: "Cardiovascular System / Upper Body Power",
    secondary: "Shoulders, Core, Calves",
    difficulty: "Intermediate",
    form: "Work in 3-minute rounds using a combination of jabs, crosses, hooks, and body shots — maintain a fighting stance, keep your hands up, and move your feet between combinations.",
    cues: "- Wrap your hands internally or wear proper gloves always.\n- Snap the punches back immediately, do not merely 'push' the bag.\n- Twist hips powerfully on all crosses and hooks."
  }
];

const groups = ["All", "Chest", "Back", "Shoulders", "Biceps", "Triceps", "Legs (Quads)", "Legs (Hamstrings)", "Legs (Calves)", "Glutes", "Core", "Cardio"];

let activeGroup = "All";

function ytUrl(name) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(name + ' tutorial proper form')}`;
}

function ytIcon() {
  return `<svg class="yt-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.57A3.01 3.01 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3.01 3.01 0 0 0 2.12 2.13C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.57A3.01 3.01 0 0 0 23.5 17.8C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/></svg>`;
}

function renderMuscleGrid() {
  const grid = document.getElementById('muscleGrid');
  grid.innerHTML = groups.map(g => `
    <button class="muscle-btn ${g === activeGroup ? 'active' : ''}" onclick="setGroup('${g.replace(/'/g, "\\'")}')">
      <span>${g}</span>
    </button>
  `).join('');
}

function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) {
    card.classList.toggle('expanded');
  }
}

function renderExercises() {
  const filtered = activeGroup === "All" ? exercises : exercises.filter(e => e.group === activeGroup);
  const grid = document.getElementById('exerciseGrid');
  const label = document.getElementById('groupLabel');
  const badge = document.getElementById('countBadge');

  const groupWord = activeGroup === "All" ? "All" : activeGroup;
  const parts = groupWord.split(' ');
  const first = parts.slice(0, -1).join(' ');
  const last = parts[parts.length - 1];
  label.innerHTML = first ? `${first} <span>${last}</span>` : `<span>${last}</span>`;
  badge.textContent = `${filtered.length} exercise${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results">No exercises found</div>`;
    return;
  }

  grid.innerHTML = filtered.map((ex, i) => `
    <div class="exercise-card" id="card-${i}" style="animation-delay:${i * 0.04}s" onclick="toggleCard('card-${i}')">
      <div class="card-header">
        <div class="ex-name">${ex.name}</div>
        <div class="expand-icon">▼</div>
      </div>
      <div class="ex-tags">
        <span class="tag primary">${ex.primary}</span>
        <span class="tag">${ex.group}</span>
        <span class="tag ${ex.difficulty.toLowerCase()}">${ex.difficulty}</span>
      </div>
      <div class="ex-equipment"><strong>Equipment:</strong> ${ex.equipment}</div>
      <div class="ex-form">${ex.form}</div>
      
      <div class="ex-details" onclick="event.stopPropagation()">
        <div><strong>Secondary Muscles:</strong> ${ex.secondary}</div>
        <div class="ex-cues">
          <strong>Common Cues & Mistakes:</strong><br/>
          ${ex.cues.replace(/\n/g, '<br/>')}
        </div>
        <a class="yt-btn" href="${ytUrl(ex.name)}" target="_blank" rel="noopener">
          ${ytIcon()} Watch Tutorial
        </a>
      </div>
    </div>
  `).join('');
}

function setGroup(g) {
  activeGroup = g;
  renderMuscleGrid();
  renderExercises();
}

renderMuscleGrid();
renderExercises();
// ─────────────────────────────────────────────────────────────────────────
// NSC AUTH — append this block to the bottom of your existing script.js
// ─────────────────────────────────────────────────────────────────────────

// ── PASTE YOUR SUPABASE CREDENTIALS HERE ──────────────────────────────────
const SUPABASE_URL = 'https://fodfiogubheodnejkzod.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvZGZpb2d1Ymhlb2RuZWprem9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MTM0ODIsImV4cCI6MjA4OTQ4OTQ4Mn0.0b8knQDQxSvHvmlVveFcRZKVVkM46HP8cThqmzfqDqU';
// ─────────────────────────────────────────────────────────────────────────

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// On load: verify session, redirect to login if missing
(async () => {
  const { data } = await supabaseClient.auth.getSession();
  if (!data.session) {
    window.location.replace('/login.html');
  }
})();

// Sign out when needed — call signOut() from a button if you add one
async function signOut() {
  await supabaseClient.auth.signOut();
  window.location.replace('/login.html');
}